import React from "react";
import Option from "../../../components/Option";
import { AllSelectionButtonFunc } from "../../../components/AllSelectionButtonfunc";
import AllSelectButton from "../../../components/AllSelectButton";

//데이터 찾기의 속성 카테고리 컴포넌트
const AttributeSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const attribute = [  //속성 카테고리의 옵션을 저장할 배열
        "None",
        "Indoor",
        "Outdoor"
      ];
    const getLocation = (event) => {
        const value = event.target.value === "" ? "None" : event.target.value;

        props.setLocationType((prev) => {
            if (event.target.checked) {
                // 체크된 경우 배열에 추가
                return [...prev, value];
            } else {
                // 체크 해제된 경우 배열에서 제거
                return prev.filter((item) => item !== value);
            }
        });
    }
    const allBtn = (event) => {
        AllSelectionButtonFunc(event, attribute, props.setLocationType, "location");
    }
    
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>속성별 보기</p>
                <AllSelectButton for="location" click={allBtn}/>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={attribute} handler={getLocation} for="location"/>
                </div>
            </div>
        </div>
    )
}

export default AttributeSelection;