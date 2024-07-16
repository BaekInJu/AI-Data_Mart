import React from "react";

const AllSelectButton = (props) => {
    return(
        <>
            <div className="all-select-button">
                <input type="checkbox"></input>
                <button type="button" onClick={props.func} >All</button>
            </div>
        </>
    )
}

export default AllSelectButton;