import React, { useState } from "react";
import Modal from "react-modal";
import "../../../style/Modal.css"

const importAll = (r) => {
    return r.keys().map(r);
};
const AiDataModal = (props) => {
    const images = importAll(require.context("../../../assets/dummyData/", false, /\.(png|jpe?g|svg)$/));
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