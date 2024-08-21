import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";


const SiteSelectionModal = (props) => {
    const closeModal = () => {
        props.setIsModalOpened(false);
    }
    const onChange = (event) => {
        props.setUserCategory(event.target.value);    //json형식으로 넘어감

    }
    const onChangeComp = (event) => {
        props.setUserCompany(event.target.value);
    }
    const onChangePro = (event) => {
        props.setUserProject(event.target.value);
    }
    
    return(
        <Modal
            overlayClassName="modal-overlay"
            isOpen={props.isModalOpened}
            // onRequestClose={props.setIsModalOpened(false)}
            shouldCloseOnOverlayClick>
                <div>
                    {props.category.map((item, index) => (
                        <span className="line" key={index} >
                        <input  
                            type="checkbox" 
                            id={item} 
                            name="option" 
                            value={item} 
                            onClick={onChange}
                            /> 
                        <label htmlFor={item}>
                            <span id={item} name="new-checkbox" />
                            {item}
                        </label>
                    
                    </span>
                    ))}
                    <hr />
                    {props.company.map((item, index) => (
                        <span className="line" key={index} >
                        <input  
                            type="checkbox" 
                            id={item} 
                            name="option" 
                            value={item} 
                            onClick={onChangeComp}
                            /> 
                        <label htmlFor={item}>
                            <span id={item} name="new-checkbox" />
                            {item}
                        </label>
                    
                    </span>
                    ))}

                    <hr />
                    {props.project.map((item, index) => (
                        <span className="line" key={index} >
                        <input  
                            type="checkbox" 
                            id={item} 
                            name="option" 
                            value={item} 
                            onClick={onChangePro}
                            /> 
                        <label htmlFor={item}>
                            <span id={item} name="new-checkbox" />
                            {item}
                        </label>
                    
                    </span>
                    ))}
                </div>
                <button onClick={closeModal}>닫기</button>
                <button onClick={props.submit}>제출</button>
        </Modal>
    )
}

export default SiteSelectionModal;