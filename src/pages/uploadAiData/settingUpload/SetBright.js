import React from "react";
import OptionRadio from "../../../components/OptionRadio";

//데이터 올리기 페이지의 밝기 카테고리 컴포넌트
const SetBright = (props) => { //props.func : 선택한 옵션 부모 컴포넌트 배열에 저장하는 함수
    const bright = [  //밝기 옵션 배열
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
                    {/* <img src={fix} alt="NoImage"/> */}
                </span>
            </div>
            <OptionRadio list={bright} handler={props.func} for="bright"/>
        </div>
    )
}

export default SetBright;