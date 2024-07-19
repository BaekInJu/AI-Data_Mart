import React from "react";
import fix from"../../../assets/image/fix.png";
import Option from "../../../components/Option";

const SetAiCategory = (props) => {
    
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>{props.title}</p>
                </span>
                <span className="fix">
                    <img src={fix} alt="NoImage"/>
                </span>
            </div>
            <Option list={props.list}/>
        </div>
    )
}

export default SetAiCategory;