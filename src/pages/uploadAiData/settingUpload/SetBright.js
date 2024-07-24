import React from "react";
import Option from "../../../components/Option";
import fix from"../../../assets/image/fix.png";

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
            <Option list={bright} handler={props.func} for="bright"/>
        </div>
    )
}

export default SetBright;