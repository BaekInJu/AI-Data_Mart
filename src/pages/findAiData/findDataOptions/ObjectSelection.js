import React from "react";
import Option from "../../../components/Option";
import { AllSelectionButtonFunc } from "../../../components/AllSelectionButtonfunc";
import AllSelectButton from "../../../components/AllSelectButton";

//데이터 찾기의 객체 카테고리 컴포넌트
const ObjectSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const object = [  //객체 카테고리의 속성을 저장할 배열
        "None",
        "Person",
        "Cyclist",
        "MotorCyclist",
        "Car",
        "Truck",
        "Etc",
        "Tonbag",
        "Spotlight",
        "Rubbercone",
        "Constequip",
        "Carbody",
        "Warningpattern"
      ];
    const getObject = (event) => {
        const value = event.target.value === "" ? "None" : event.target.value;

        props.setObjectType((prev) => {
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
        AllSelectionButtonFunc(event, object, props.setObjectType, "object");
    }
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>객체별 보기</p>
                <AllSelectButton for="object" click={allBtn} />
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={object} handler={getObject} for="object"/>
                </div>
            </div>
        </div>
    )
}

export default ObjectSelection;