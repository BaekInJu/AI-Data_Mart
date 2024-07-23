import React, { useState } from "react";
import Calendar from "react-calendar";
import CalendarModal from "../../../components/CalendarModal";

const SetAiDate = (props) => {
    const [date, setDate] = useState();
    const [isModalOpened, setIsModalOpened] = useState(false);
    const opepModal = () => {
        setIsModalOpened(true);
    }    
 return(
        <div className="upload-data-set-form">
            <input
            type="text"
            value={date} />
            <button onClick={opepModal}><img src={props.img} alt="NoImage" /></button>
            <CalendarModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} setDate={setDate}/>
        </div>
    )
}

export default SetAiDate;