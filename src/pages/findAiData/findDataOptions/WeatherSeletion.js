import React from "react";
import Option from "../../../components/Option";

const WeatherSeletion = (props) => {
    const weather = [
        "None",
        "Clear",
        "Rain",
        "Snow"
      ];
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>날씨별 보기</p>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={weather} handler={props.func} for="weather"/>
                </div>
            </div>
        </div>
    )
}

export default WeatherSeletion;