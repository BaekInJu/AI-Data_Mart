import React from "react";
import Option from "../../../components/Option";
import OptionRadio from "../../../components/OptionRadio";
import fix from"../../../assets/image/fix.png";

const SetAttribute = (props) => {
    const attribute = [
        "None",
        "Indoor",
        "Outdoor"
      ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>위치</p>
                </span>
                <span className="fix">
                    {/* <img src={fix} alt="NoImage"/> */}
                </span>
            </div>
            {/* <Option list={attribute} handler={props.func} for="attribute"/> */}
            <OptionRadio list={attribute} handler={props.func} for="attribute"/>
        </div>
    )
}

export default SetAttribute;