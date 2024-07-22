import React from "react";

const SetAiProject = (props) => {
    return(
        <div className="upload-data-set-form">
            <input
            type="text" />
            <button><img src={props.img} alt="NoImage" /></button>
        </div>
    )
}

export default SetAiProject;