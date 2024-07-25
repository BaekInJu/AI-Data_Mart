import React, { useState } from "react";
import Modal from "react-modal";
import "../../../style/SetAiProjectModal.css";

import SetProduct from "./SetProduct";
import SetCompany from "./SetCompany";
import SetSubProject from "./SetSubProject";
import SetProjectDetail from "./SetProjectDetail";

const SetProjectModal = (props) => {
    const closeModal = () => {
        props.setIsModalOpened(false);
    }

    const [showProjectDetail, setShowProjectDetail] = useState();
    return(
        <>
        <Modal
        className="modal-contents-project"
        overlayClassName="modal-overlay"
        isOpen={props.isModalOpened}
        onRequestClose={()=>props.setIsModalOpened(false)}
        shouldCloseOnOverlayClick>
            <div className="set-project-modal">
                <div id="title">
                    <p>
                        프로젝트
                    </p>
                    <button onClick={closeModal}>
                        닫기
                    </button>
                </div>
                <p id="discription">데이터 올리기 하는 프로젝트 위치를 선택해주세요.</p>
                <hr />
                <div className="set-project-modal-options">
                    <SetProduct handler={props.func}/>
                    <SetCompany handler={props.func}/>
                    <SetSubProject handler={props.func}/>
                    <SetProjectDetail handler={props.func} />
                </div>
                <div className="inp-sub-project">
                    <span>세부 프로젝트</span>
                    <input value={showProjectDetail}></input>
                </div>
                <hr />
                <div className="submit">
                    <button>제출</button>
                </div>  
            </div>
        </Modal>
        </>
    )
}

export default SetProjectModal;