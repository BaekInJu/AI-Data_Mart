import React from "react";
import "../../../style/FindDataSet.css";
import AiData from "./AiData";

//데이터셋 목록 관리 컴포넌트
const FindDataSet = (props) => {  //props.num : 데이터셋 개수
    return(
        <div className="find-data-set">
            <div className="number-data">
                <p className="number-data">데이터셋 - {props.num}건</p>
            </div>
            <div className="find-data-list">
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
                <AiData />
            </div>
        </div>
    )
}

// props: num(데이터 총 개수), (데이터 정보 json)

export default FindDataSet;
