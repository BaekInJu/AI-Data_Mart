import React from "react";
import OptionRadio from "../../../components/OptionRadio";


//데이터 올리기 페이지의 날씨 카테고리 컴포넌트
const SetWeather = (props) => { //props.func : 선택한 옵션 부모 컴포넌트 배열에 저장하는 함수
    const weather = [  //날씨 카테고리 옵션 배열
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