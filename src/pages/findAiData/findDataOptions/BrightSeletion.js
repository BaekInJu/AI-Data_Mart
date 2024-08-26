import React from "react";
import Option from "../../../components/Option";
import AllSelectButton from "../../../components/AllSelectButton";
import { AllSelectionButtonFunc } from "../../../components/AllSelectionButtonfunc";

//데이터 찾기의 밝기 카테고리 컴포넌트
const BrightSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const bright = [ //밝기 카테고리의 옵션을 저장할 배열
        "None",
        "Bright",
        "Dark"
      ];
    const getLuminosityType = (event) => {
        const value = event.target.value === "" ? "None" : event.target.value;

        props.setLuminosityType((prev) => {
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
        AllSelectionButtonFunc (event, bright, props.setLuminosityType, "luminosityType");
      }
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>밝기별 보기</p>
                <AllSelectButton for="luminosityType" click={allBtn} />
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={bright} handler={getLuminosityType} for="luminosityType"/>
                </div>
            </div>
        </div>
    )
}

export default BrightSelection;