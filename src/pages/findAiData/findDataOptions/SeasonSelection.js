import React from "react";
import Option from "../../../components/Option";

const SeasonSelection = (props) => {
    const season = [
        "None",
        "Spring",
        "Summer",
        "Fall"
      ];
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>계절별 보기</p>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={season} handler={props.func} for="season"/>
                </div>
            </div>
        </div>
    )
}

export default SeasonSelection;