import React from "react";
import Option from "../../../components/Option";

const BrightSelection = (props) => {
    const bright = [
        "None",
        "Bright",
        "Dark"
      ];
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>밝기별 보기</p>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={bright} handler={props.func} for="bright"/>
                </div>
            </div>
        </div>
    )
}

export default BrightSelection;