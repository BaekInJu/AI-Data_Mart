import React from "react";
import Option from "../../../components/Option";
import fix from"../../../assets/image/fix.png";

const SetResolution = (props) => {
    const resolution = [
        "None",
        "2M",
        "4M"
      ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>해상도</p>
                </span>
                <span className="fix">
                    <img src={fix} alt="NoImage"/>
                </span>
            </div>
            <Option list={resolution} handler={props.func} for="resolution"/>
        </div>
    )
}

export default SetResolution;