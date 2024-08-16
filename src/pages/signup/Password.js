import React from "react";
import { InpContainer, InpLabel, Inp, PasswordField } from "./Styles";

const Password = () => {
    return(
        <InpContainer>
            <InpLabel>비밀번호</InpLabel>
            <Inp type="password" placeholder="비밀번호를 입력하세요."/>
        </InpContainer>
    )
}

export default Password;