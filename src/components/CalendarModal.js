import React, { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import "../style/CalendarModal.css"
import 'react-calendar/dist/Calendar.css'
import moment from "moment";

//달력 UI 모달 컴포넌트
const CalendarModal = (props) => {
    const change = (event) => {   //달력으로부터 날짜를 받아 년 월 일 형식으로 포맷후 저장하는 함수
        const date = (moment(event).format("YYYY년 MM월 DD일"));
        props.setDate(date);
        props.setIsModalOpened(false);  //날짜를 받으면 모달을 닫는다.
    }
    return(
        <>
        <Modal
            className="calender-modal-contents"
            overlayClassName="modal-overlay"
            isOpen={props.isModalOpened}
            onRequestClose={()=>props.setIsModalOpened(false)}
            shouldCloseOnOverlayClick
        >
            {/* <Calendar onChange={change}/> */}
            <Calendar 
                onChange={change} 
                formatDay={(locale, date) => moment(date).format("DD")} 
            />
        </Modal>
         
        </>
    )
}

export default CalendarModal;