import React from "react";
import Modal from "react-modal";
import "../../../style/FindSiteModal.css";
import OptionRadio from "../../../components/OptionRadio";



const SiteSelectionModal = (props) => {
    const closeModal = () => {
        props.setUserCategory();
        props.setUserCompany();
        props.setUserProject();
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
    SiteSelectionModal.defaultProps = {
        category: [],
        company: [],
        project: []
    };

    return(
        <Modal
            className="find-site-modal"
            overlayClassName="modal-overlay"
            isOpen={props.isModalOpened}
            shouldCloseOnOverlayClick>
                <div id="title">
                    <p>
                        사이트 찾기
                    </p>
                    <button onClick={closeModal}>
                        닫기
                    </button>
                </div>
                <p id="discription">조회하려는 사이트를 선택해주세요.</p>
                <hr />
                <div className="set-project-modal-options">
                <div className="set-upload-category">
                    <div className="set-title">
                        <span className="title">
                            <p>카테고리</p>
                        </span>
                        {/* <span className="fix">
                            <img src={add} alt="NoImage"/>
                        </span> */}
                    </div>
                    <OptionRadio list={props.category} handler={onChange} for="category" type="site"/>
                </div>
                <div className="set-upload-category">
                    <div className="set-title">
                        <span className="title">
                            <p>업체</p>
                        </span>
                        {/* <span className="fix">
                            <img src={add} alt="NoImage"/>
                        </span> */}
                    </div>
                    <OptionRadio list={props.company} handler={onChangeComp} for="company" type="site"/>
                </div>
                <div className="set-upload-category">
                    <div className="set-title">
                        <span className="title">
                            <p>프로젝트</p>
                        </span>
                        {/* <span className="fix">
                            <img src={add} alt="NoImage"/>
                        </span> */}
                    </div>
                    <OptionRadio list={props.project} handler={onChangePro} for="project" type="site"/>
                </div>
                </div>
                <div className="inp-sub-project">
                    <span>사이트</span>
                    <input value=""></input>
                </div>
                <hr />
                <div className="submit">
                    <button onClick={props.submit}>제출</button>
                </div>  
                {/* <div>
                    {props.category.length > 0 && props.category.map((item, index) => (
                        <span className="line" key={index} >
                        <input  
                            type="radio" 
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
                    {props.company.length > 0 && props.company.map((item, index) => (
                        <span className="line" key={index} >
                        <input  
                            type="radio" 
                            id={item} 
                            name="option1" 
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
                    {props.project.length > 0 && props.project.map((item, index) => (
                        <span className="line" key={index} >
                        <input  
                            type="radio" 
                            id={item} 
                            name="option2" 
                            value={item} 
                            onClick={onChangePro}
                            /> 
                        <label htmlFor={item}>
                            <span id={item} name="new-checkbox" />
                            {item}
                        </label>
                    
                    </span>
                    ))}
                </div> */}
                {/* <button onClick={closeModal}>닫기</button> */}
                {/* <button onClick={props.submit}>제출</button> */}
        </Modal>
    )
}

export default SiteSelectionModal;