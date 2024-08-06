import React, { useState } from "react";
import DownloadIcon from "../../../assets/image/download-icon.png"
import AiDataModal from "./AiDataModal";


const AiData = (props) => {

    const [isModalOpened, setIsModalOpened] = useState(false);

    // 모달 열기 함수
    const openModal = (e) => {
        // 이벤트 전파 중단
        // e.stopPropagation();
        // setIsModalOpened(true);
        if (isModalOpened) return;
        setIsModalOpened(true);
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setIsModalOpened(false); 
    };
    //다운로드 함수
    const download = (e) => {
        e.stopPropagation();
        console.log("download!!");
   }

    return(
        <div className="ai-data" onClick={openModal}>
            <div className="aidata-download-button">
                <button onClick={download}><img src={DownloadIcon} alt="NoImage"/><p>다운로드</p></button>
            </div>
            <div className="ai-data-title">
                <p>MOD / BRIGADE / #001 </p>
            </div>
            <hr />
            <div className="ai-data-info">
                <div className="data-name"><p>ㆍ명칭: 240702_#001</p></div>
                <div className="create-date"><p>ㆍ생성일: 2024년 1월 25일</p></div>
                <div className="data-number"><p>ㆍ데이터개수: 5,105개</p></div>
            </div>
            <div className="ai-data-tag">
                <p>#사람 #로봇 #지그 #배경 #여름 #흐림 </p>
            </div>
            <AiDataModal isModalOpened={isModalOpened} setIsModalOpened={closeModal} />
        </div>
    )
}

export default AiData;