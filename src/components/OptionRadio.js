import React from "react";

//카테고리 옵션을 라디오 버튼으로 구성해주는 컴포넌트
const OptionRadio = (props) => {     //props => list = 옵션 목록, handler = 선택된 옵션 배열 업데이트 함수, for = 해당 옵션의 타입   
    //선택된 항목을 상위 컴포넌트로 보내주는 함수
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
                    {/* <img src={Delete}/> */}
                </div>
                ))}
        </div>
        </>
    )
}

export default OptionRadio;