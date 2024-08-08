import React, { useState } from "react";
import Modal from "react-modal";
import "../../../style/SetAiProjectModal.css";

import SetProduct from "./SetProduct";
import SetCompany from "./SetCompany";
import SetSubProject from "./SetSubProject";
import SetProjectDetail from "./SetProjectDetail";

//프로젝트 선택 모달창 페이지 구성 컴포넌트
const SetProjectModal = (props) => {
    const closeModal = () => {  //모달 창 닫기 함수
        props.setValue(formattedDetails);   //사용자가 입력했던 카테고리 원래 페이지 input창에 저장
        setShowProjectDetail([]);    //저장 되었던 카테고리 초기화
        props.setIsModalOpened(false);    //모달창 닫기
    }

    //프로젝트 선택 모달창 페이지 구성 컴포넌트
    const [showProjectDetail, setShowProjectDetail] = useState({  //사용자로부터 받은 카테고리를 담는 객체
        product: "",   //굳이 여기서 미리 type을 지정하는 것은 출력할때 순서대로 출력하기 위함
        company: "",
        subProject: "",
        projectDetail: ""
    });
    
    const projectHandler = (e) => {  //카테고리가 선택될때마다 실행되는 핸들러
        setShowProjectDetail((prev) => ({
            ...prev,
            [e.type]: e.value
        }));
    }

    const formattedDetails = [  //입력받은 카테고리를 '/'로 나눠서 사용자에게 보여줌
        showProjectDetail.product,
        showProjectDetail.company,
        showProjectDetail.subProject,
        showProjectDetail.projectDetail
    ].filter(detail => detail).join(' / ');

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
                    <SetProduct handler={projectHandler}/>
                    <SetCompany handler={projectHandler}/>
                    <SetSubProject handler={projectHandler}/>
                    <SetProjectDetail handler={projectHandler} />
                </div>
                <div className="inp-sub-project">
                    <span>세부 프로젝트</span>
                    <input value={formattedDetails}></input>
                </div>
                <hr />
                <div className="submit">
                    <button onClick={closeModal}>제출</button>
                </div>  
            </div>
        </Modal>
        </>
    )
}

export default SetProjectModal;