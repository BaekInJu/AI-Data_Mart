import React from "react";
import fix from"../../../assets/image/fix.png";
import OptionRadio from "../../../components/OptionRadio";

const SetBright = (props) => {
    const bright = [
        "None",
        "Bright",
        "Dark"
      ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>밝기</p>
                </span>
                <span className="fix">
                    <img src={fix} alt="NoImage"/>
                </span>
            </div>
            <OptionRadio list={bright} handler={props.func} for="bright"/>
        </div>
    )
}

export default SetBright;