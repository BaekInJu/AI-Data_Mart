import React from "react";
import Option from "../../../components/Option";
import fix from"../../../assets/image/fix.png";

const SetSeason = (props) => {
    const season = [
        "None",
        "Spring",
        "Summer",
        "Fall"
      ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>계절</p>
                </span>
                <span className="fix">
                    <img src={fix} alt="NoImage"/>
                </span>
            </div>
            <Option list={season} handler={props.func} for="season"/>
        </div>
    )
}

export default SetSeason;