import React from "react";
import { InpContainer, InpLabel, Inp } from "./Styles";

const CheckPassword = () => {
    return(
        <InpContainer>
            <InpLabel>비밀번호 확인</InpLabel>
            <Inp type="password" placeholder="비밀번호를 다시 입력하세요."/>
        </InpContainer>
    )
}

export default CheckPassword;