import React, { useState } from "react";
import CalendarModal from "../../../components/CalendarModal";

//데이터 올리기 페이지의 날짜 카테고리 컴포넌트
const SetAiDate = (props) => {    //props.img : 달력 아이콘
    const [date, setDate] = useState();  //입력 받은 날짜를 저장할 배열
    const [isModalOpened, setIsModalOpened] = useState(false);    //달력 모달 상태 관리 변수
    const openModal = () => {   //달력 모달 열기 핸들러
        setIsModalOpened(true);
    }    
 return(
        <div className="upload-data-set-form">
            <input
            type="text"
            value={date} />
            <button onClick={openModal}><img src={props.img} alt="NoImage" /></button>
            <CalendarModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} setDate={setDate}/>
        </div>
    )
}

export default SetAiDate;