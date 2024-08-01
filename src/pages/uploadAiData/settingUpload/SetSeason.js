import React from "react";
import fix from"../../../assets/image/fix.png";
import OptionRadio from "../../../components/OptionRadio";

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
            <OptionRadio list={season} handler={props.func} for="season"/>
        </div>
    )
}

export default SetSeason;