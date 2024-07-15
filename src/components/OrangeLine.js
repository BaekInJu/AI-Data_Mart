import React from "react";
import propTypes from "prop-types"


const OrangeLine = (props) => {
    return(
        <>
            <div className="orange-line">
                <div className="orange-line-text">
                    <h3>{props.text}</h3>
                </div>
            </div>
            <hr className="orange-bottom-hr"/>
        </>
    )
}

OrangeLine.propTypes = {
    text : propTypes.string
}

export default OrangeLine;