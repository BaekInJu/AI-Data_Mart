import React, { useState } from "react";
import DownloadIcon from "../../../assets/image/download-icon.png"
import AiDataModal from "./AiDataModal";

//데이터셋 구성 컴포넌트
const AiData = (props) => {

    const [isModalOpened, setIsModalOpened] = useState(false);   //모달창 열림 / 닫힘 상태를 관리하는 boolean 변수(초기값 false)

    // 모달 열기 함수
    const openModal = (e) => {
        if (isModalOpened) return;   //이미 열려있는 상태라면 return
        setIsModalOpened(true);
    };
    
    // 모달 닫기 함수
    const closeModal = () => {
        setIsModalOpened(false);   //모달창 상태를 false로 세팅
    };
    //다운로드 함수
    const download = (e) => {
        e.stopPropagation();  //이벤트 전달 차단(다운로드 버튼을 눌렀을땐 모달 창이 뜨면 안됨)
        console.log("download!!");  //테스트 출력
   }
   // Date 객체로 변환
    const date = new Date(props.recordDate);

    // 년, 월, 일 추출
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth()는 0부터 시작하므로 1을 더해줌
    const day = String(date.getDate()).padStart(2, '0');


    return(
        <div className="ai-data" onClick={openModal}>
    <div className="aidata-download-button">
        <button onClick={download}>
            <img src={DownloadIcon} alt="NoImage"/>
            <p>다운로드</p>
        </button>
    </div>
    <div className="ai-data-title">
        <p>{`${props.categoryName} / ${props.companyNameEng} / ${props.projectNameEng}`}</p>
    </div>
    <hr />
    <div className="ai-data-info">
        <div className="data-name"><p>ㆍ명칭: {props.detailProjectName}</p></div>
        <div className="create-date"><p>ㆍ생성일: {`${year}년 ${month}월 ${day}일`}</p></div>
        <div className="data-number"><p>ㆍ데이터개수: {props.fileCount}개</p></div>
    </div>
    <div className="ai-data-tag">
        <p>{props.weatherType !== "None" && `#${props.weatherType} `} 
        {props.seasonType !== "None" && `#${props.seasonType} `} 
        {props.luminosityType !== "None" && `#${props.luminosityType} `} 
        {props.resolutionType !== "None" && `#${props.resolutionType} `} 
        {props.locationType !== "None" && `#${props.locationType}`}
        {props.objectType !== "none" && `#${props.objectType}`}   
        {/* 객체 데이터만 none의 첫글자가 소문자임 */}
        </p>
    </div>
    <AiDataModal isModalOpened={isModalOpened} setIsModalOpened={closeModal} />
</div>
    )
}

export default AiData;
