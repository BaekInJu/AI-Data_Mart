import React, { useState } from "react";
import Modal from "react-modal";
import "../../../style/Modal.css"

const importAll = (r) => {   //테스트용 사진 import함수
    return r.keys().map(r);
};

//데이터셋 모달창 컴포넌트
const AiDataModal = (props) => {   //propsisModalOpened : 모달 창 상태 변수 props.setIsModalOpened : 모달 창 상태 핸들러 함수
    const images = importAll(require.context("../../../assets/dummyData/", false, /\.(png|jpe?g|svg)$/));  //테스트용 이미지 형식 선언
    return(
        <>
        <Modal
            className="modal-contents"
            overlayClassName="modal-overlay"
            isOpen={props.isModalOpened}
            onRequestClose={()=>props.setIsModalOpened(false)}
            shouldCloseOnOverlayClick
        >
            <div className="modal-container">
                <div className="modal-top">
                    <span className="top-left">
                        <p>MOD / HOWN / NE / 240702_#002</p>
                        <div className="detail-info">
                            <div className="created-date">생성일</div>
                            <p>2024년 1월 25일</p>
                            <div className="number-data">데이터 개수</div>
                            <p>5,105개</p>
                        </div>
                    </span>
                    <span className="top-right">
                        <div  id="close">
                            <button onClick={()=>{props.setIsModalOpened(false)}}>닫기</button>
                        </div>
                        <div id="download">
                            <button>다운로드</button>
                        </div>
                    </span>
                </div>
                <hr />
                <div className="img-list">
                    <div className="img-container">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`20240624_021818_CH02_000000${index}.jpg${index}`} />
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
        </>
    )
}

export default AiDataModal;