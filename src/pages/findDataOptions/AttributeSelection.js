import React from "react";
import Option from "../../components/Option";

const AttributeSelection = (props) => {
    const attribute = [
        "None",
        "Indoor",
        "Outdoor"
      ];
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>속성별 보기</p>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={attribute} handler={props.func} for="attribute"/>
                </div>
            </div>
        </div>
    )
}

export default AttributeSelection;