import React from "react";
import { SaveIdField } from "./Styles";
import { SaveIdLabel } from "./Styles";
import { SaveCheckbox } from "./Styles";


const SaveId = () => {
    
    return(
        <>
        <SaveIdField>
            <SaveCheckbox id="save-id-checkbox"/>
            <SaveIdLabel htmlFor="save-id-checkbox">아이디 저장</SaveIdLabel>
        </SaveIdField>
        </>
    )
}

export default SaveId;