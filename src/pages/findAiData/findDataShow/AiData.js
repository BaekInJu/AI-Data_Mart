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