import React from "react";
import OptionRadio from "../../../components/OptionRadio";

//데이터 올리기 페이지의 속성 카테고리 컴포넌트
const SetAttribute = (props) => {  //props.func : 선택한 옵션 부모 컴포넌트 배열에 저장하는 함수
    const attribute = [    //속성 옵션 배열
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