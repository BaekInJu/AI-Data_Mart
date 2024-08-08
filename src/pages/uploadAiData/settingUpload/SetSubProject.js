import React from "react";
import OptionRadio from "../../../components/OptionRadio";


//데이터 올리기 페이지의 업체 카테고리 컴포넌트
const SetSubProject = (props) => { //props.func : 선택한 옵션 부모 컴포넌트 배열에 저장하는 함수
    const company = [  //업체 카테고리 옵션 배열
        "NE", 
        "Forklift",
        "HI",
        "AD"
    ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>서브 프로젝트</p>
                </span>
                <span className="fix">
                    {/* <img src={add} alt="NoImage"/> */}
                </span>
            </div>
            <OptionRadio list={company} handler={props.handler} for="subProject"/>
        </div>
    )
}

export default SetSubProject;