import React, { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import "../style/CalendarModal.css"
import 'react-calendar/dist/Calendar.css'
import moment from "moment";

const CalendarModal = (props) => {
    // const [value, setValue] = useState();
    const change = (event) => {
        const date = (moment(event).format("YYYY년 MM월 DD일"));
        props.setDate(date);
        console.log(date);
        props.setIsModalOpened(false);
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
            <Calendar onChange={change}/>
        </Modal>
         
        </>
    )
}

export default CalendarModal;