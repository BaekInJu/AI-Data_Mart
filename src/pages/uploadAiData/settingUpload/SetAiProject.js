import React from "react";

const SetAiProject = (props) => {
    return(
        <div className="upload-data-set-form">
            <form method="post">
                <input
                type="text" />
                <button><img src={props.img} alt="NoImage" /></button>
            </form>
        </div>
    )
}

export default SetAiProject;