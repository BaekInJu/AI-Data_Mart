import React, { useState } from "react";
import SetAiProjectModal from "./SetProjectModal";

const SetAiProject = (props) => {
    const [date, setDate] = useState();
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openModal = () => {
        setIsModalOpened(true);
    }    
    return(
        <div className="upload-data-set-form">
            <input
            type="text" />
            <button onClick={openModal}><img src={props.img} alt="NoImage" /></button>
            <SetAiProjectModal isModalOpened={isModalOpened} func={props.func} setIsModalOpened={setIsModalOpened} /> 
        </div>
    )
}

export default SetAiProject;