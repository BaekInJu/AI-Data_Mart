import React from "react";
import OptionRadio from "../../../components/OptionRadio";
import add from "../../../assets/image/add.png";

const SetCompany = (props) => {
    const company = [
        "AJIN", 
        "HOWON",
        "KIA",
        "AJIN USA"
    ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>업체</p>
                </span>
                <span className="fix">
                    <img src={add} alt="NoImage"/>
                </span>
            </div>
            <OptionRadio list={company} handler={props.handler} for="company"/>
        </div>
    )
}

export default SetCompany;