import React from "react";
import propTypes from "prop-types"

//웹사이트 메뉴바와 본문 내용을 구분하는 오랜지색 선
const OrangeLine = (props) => {
    return(
        <>
            <div className="orange-line">
                <div className="orange-line-text">
                    <p>{props.text}</p>
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