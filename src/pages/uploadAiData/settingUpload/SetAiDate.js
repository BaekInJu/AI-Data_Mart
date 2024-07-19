import React from "react";

const SetAiDate = (props) => {
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

export default SetAiDate;