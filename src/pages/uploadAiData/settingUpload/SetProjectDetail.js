import React from "react";
import OptionRadio from "../../../components/OptionRadio";
import add from "../../../assets/image/add.png";

const SetProjectDetail = (props) => {
    const projectDeteil = [
        "240615_#001",
        "240615_#002",
        "240615_#003",
        "240615_#004",
        "240615_#005",
        "240615_#006",
        "240615_#007",
        "240615_#008",
    ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>세부 프로젝트</p>
                </span>
                <span className="fix">
                    {/* <img src={add} alt="NoImage"/> */}
                </span>
            </div>
            <OptionRadio list={projectDeteil} handler={props.handler} for="projectDetail"/>
        </div>
    )
}

export default SetProjectDetail;