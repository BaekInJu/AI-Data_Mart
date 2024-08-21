import React from "react";
import OptionRadio from "../../../components/OptionRadio";

//데이터 올리기 페이지의 회사 카테고리 컴포넌트
const SetCompany = (props) => { //props.func : 선택한 옵션 부모 컴포넌트 배열에 저장하는 함수
    const company = [  //회사 옵션 배열
        "AJIN", 
        "HOWON",
        "KIA",
        "AJIN USA"
    ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>업체</p>
                </span>
                {/* <span className="fix">
                    <img src={add} alt="NoImage"/>
                </span> */}
            </div>
            <OptionRadio list={company} handler={props.handler} for="company"/>
        </div>
    )
}

export default SetCompany;