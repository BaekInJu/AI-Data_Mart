import React from "react";
import Option from "../../../components/Option";

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
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>객체별 보기</p>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={object} handler={props.func} for="object"/>
                </div>
            </div>
        </div>
    )
}

export default ObjectSelection;