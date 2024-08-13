import React from "react";
import { Id } from "./Styles";
import { Label } from "./Styles";
import { InputId } from "./Styles";
const IdField = (props) => {
    const onChange = (e) => {
        props.setInpId(e.target.value);
    }
    return(
        <div>
            <Id>
                <Label>아이디</Label>
                <InputId onChange={onChange} value={props.inpId}/>
            </Id>
        </div>
    )
}

export default IdField;