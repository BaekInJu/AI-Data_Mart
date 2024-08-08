import React from "react";
import Option from "../../../components/Option";

//데이터 찾기의 날씨 카테고리 컴포넌트
const WeatherSeletion = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const weather = [  //날씨 카테고리 옵션 배열
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