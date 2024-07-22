import React, { useState } from "react";
import DownloadIcon from "../../../assets/image/download-icon.png"
import AiDataModal from "./AiDataModal";


const AiData = (props) => {

    const [isModalOpened, setIsModalOpened] = useState(false);

    const openModal = (handler) => {
        setIsModalOpened(true)
    }
    return(
        <div className="ai-data" >
            <div className="aidata-download-button">
                <button onClick={openModal}><img src={DownloadIcon} alt="NoImage"/><p>다운로드</p></button>
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
                <p>#사람 #로봇 #지그 #배경 #한잔 #좋은 #친구 #바다</p>
            </div>
            <AiDataModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
        </div>
    )
}

export default AiData;