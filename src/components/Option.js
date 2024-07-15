import "../style/Option.css";
import React from "react";

const Option = (props) => {    //props => 배열(옵션 목록), 핸들러(선택된 옵션 배열 업데이트 함수)
    const onChange = (event) => {
        props.handler(event.target.value);
    }

    return(
        <>
            <div className="checkbox-lines">
                {props.list.map((item, index) => (
                        <div className="line" key={index}>
                            <input type="checkbox" id={item} name="option" value={item} onChange={onChange}/>
                            <span id={item} name="new-checkbox" />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Option;