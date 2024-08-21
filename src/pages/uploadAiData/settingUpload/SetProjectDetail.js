import React from "react";
import OptionRadio from "../../../components/OptionRadio";

//상세프로젝트 카테고리 컴포넌트
const SetProjectDetail = (props) => {   //props.func : 선택한 옵션 부모 컴포넌트 배열에 저장하는 함수
    const projectDeteil = [ //상세 프로젝트 옵션을 저장할 배열
        "240615_#001",
        "240615_#002",
        "240615_#003",
        "240615_#004",
        "240615_#005",
        "240615_#006",
        "240615_#007",
        "240615_#008",
    ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>세부 프로젝트</p>
                </span>
                {/* <span className="fix">
                    <img src={add} alt="NoImage"/>
                </span> */}
            </div>
            <OptionRadio list={projectDeteil} handler={props.handler} for="projectDetail"/>
        </div>
    )
}
        
export default SetProjectDetail;