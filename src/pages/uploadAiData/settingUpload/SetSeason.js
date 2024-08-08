import React from "react";
import fix from"../../../assets/image/fix.png";
import OptionRadio from "../../../components/OptionRadio";

//데이터 올리기 페이지의 계절 카테고리 컴포넌트
const SetSeason = (props) => { //props.func : 선택한 옵션 부모 컴포넌트 배열에 저장하는 함수
    const season = [   //계절 카테고리 옵션 배열
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
                    {/* <img src={fix} alt="NoImage"/> */}
                </span>
            </div>
            <OptionRadio list={season} handler={props.func} for="season"/>
        </div>
    )
}

export default SetSeason;