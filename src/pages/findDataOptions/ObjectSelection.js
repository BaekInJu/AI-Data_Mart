import React from "react";
import Option from "../../components/Option";

const ObjectSelection = (props) => {
    const object = [
        "Person",
        "Cyclist",
        "MotorCyclist",
        "Car"
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