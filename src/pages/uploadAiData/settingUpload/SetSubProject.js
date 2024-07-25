import React from "react";
import OptionRadio from "../../../components/OptionRadio";
import add from "../../../assets/image/add.png";

const SetSubProject = (props) => {
    const company = [
        "NE", 
        "Forklift",
        "HI",
        "AD"
    ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>서브 프로젝트</p>
                </span>
                <span className="fix">
                    <img src={add} alt="NoImage"/>
                </span>
            </div>
            <OptionRadio list={company} handler={props.handler} for="subProject"/>
        </div>
    )
}

export default SetSubProject;