import "../style/Option.css";
import React from "react";

const Option = (props) => {    //props => list = 옵션 목록, handler = 선택된 옵션 배열 업데이트 함수, for = 해당 옵션의 타입
    const onChange = (event) => {
        props.handler(JSON.parse(`{${event.target.value}}`));    //json형식으로 넘어감
    }

    return(
        <>
        <div className="checkbox-lines">
            {props.list.map((item, index) => (
                <div className="line" key={index} >
                    <input 
                        className="checkbox" 
                        type="checkbox" 
                        id={`${props.for} : ${item}`} 
                        name="option" 
                        value={`"type": "${props.for}", "value": "${item}"`} 
                        onClick={onChange}
                        />  
                    
                    <label htmlFor={`${props.for} : ${item}`}>
                        <span id={item} name="new-checkbox" />
                        {item}
                    </label>
                </div>
                ))}
        </div>
        </>
    )
}

export default Option;