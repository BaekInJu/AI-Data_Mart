import React from "react";
import Option from "../../../components/Option";
import OptionRadio from "../../../components/OptionRadio";
import fix from"../../../assets/image/fix.png";

const SetWeather = (props) => {
    const weather = [
        "None",
        "Clear",
        "Rain",
        "Snow"
      ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>날씨</p>
                </span>
                <span className="fix">
                    {/* <img src={fix} alt="NoImage"/> */}
                </span>
            </div>
            {/* <Option list={weather} handler={props.func} for="weather"/> */}
            <OptionRadio list={weather} handler={props.func} for="weather"/>
        </div>
    )
}

export default SetWeather;