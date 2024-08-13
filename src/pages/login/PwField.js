import React from "react";
import { Password } from "./Styles";
import { Label } from "./Styles";
import { InputPW } from "./Styles";
const PwField = (props) => {
    const onChange = (e) => {
        props.setInpPw(e.target.value);
    }
    return(
        <>
        <Password>
            <Label>패스워드</Label>
            <InputPW onChange={onChange} value={props.inpPw}/>
        </Password>
        </>
    )
}

export default PwField;