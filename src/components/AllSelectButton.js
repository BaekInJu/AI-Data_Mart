import React from "react";
import "../style/AllSelectButton.css"

const AllSelectButton = (props) => {

    return(
        <>
            <div className="all-select-button">
                <input 
                className="checkbox"
                type="checkbox" 
                id={`${props.for}`}
                onChange={props.handler}/>
                <label htmlFor={props.for} >
                    <span id={props.for} name="new-checkbox" />
                    All
                </label>
            </div>
        </>
    )
}

export default AllSelectButton;