import React from "react";
import Option from "../../../components/Option";
import AllSelectButton from "../../../components/AllSelectButton";
import { AllSelectionButtonFunc } from "../../../components/AllSelectionButtonfunc";

//데이터 찾기의 날씨 카테고리 컴포넌트
const WeatherSeletion = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const weather = [  //날씨 카테고리 옵션 배열
        "None",
        "Clear",
        "Rain",
        "Snow"
      ];
      const getWeather = (event) => {
        const value = event.target.value === "" ? "None" : event.target.value;

        props.setWeatherType((prev) => {
            if (event.target.checked) {
                // 체크된 경우 배열에 추가
                return [...prev, value];
            } else {
                // 체크 해제된 경우 배열에서 제거
                return prev.filter((item) => item !== value);
            }
        });
      }
      const allBtn = (event) => {
        AllSelectionButtonFunc (event, weather, props.setWeatherType, "weather");
      }
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>날씨별 보기</p>
                <AllSelectButton for="weather" click={allBtn}/>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={weather} handler={getWeather} for="weather"/>
                </div>
            </div>
        </div>
    )
}

export default WeatherSeletion;