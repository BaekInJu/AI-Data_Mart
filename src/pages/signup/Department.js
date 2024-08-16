import React from "react";
import { Inp, InpContainer, InpLabel } from "./Styles";

const Department = () => {
    return(
        <InpContainer>
            <InpLabel>부서명</InpLabel>
            <Inp type="text" placeholder="부서명을 입력해주세요."/>
        </InpContainer>
    )
}

export default Department;