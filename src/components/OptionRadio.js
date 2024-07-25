import React from "react";

const OptionRadio = (props) => {
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
                        type="radio" 
                        id={`${props.for} : ${item}`} 
                        name={props.for} 
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

export default OptionRadio;