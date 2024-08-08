import React, { useState } from "react";
import SetAiProjectModal from "./SetProjectModal";

//데이터 올리기 페이지의 프로젝트 카테고리 모달 열기 컴포넌트
const SetAiProject = (props) => {     //프로젝트 검색 아이콘(돋보기)
    const [project, setProject] = useState();    //입력받은 프로젝트를 저장할 변수
    const [isModalOpened, setIsModalOpened] = useState(false);  //모달창 열림 / 닫힘 상태를 저장하는 boolean 변수

    const openModal = () => {  //모달 창을 여는 함수
        setIsModalOpened(true);
    }    
    return(
        <div className="upload-data-set-form">
            <input
            type="text"
            value={project} />
            <button onClick={openModal}><img src={props.img} alt="NoImage" /></button>  
            <SetAiProjectModal isModalOpened={isModalOpened} func={props.func} setIsModalOpened={setIsModalOpened} setValue={setProject}/> 
        </div>
    )
}

export default SetAiProject;