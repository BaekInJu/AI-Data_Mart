import React from "react";
import { InpLabel, EmailField, InpEmail, CheckEmail } from "./Styles";

const Email = () => {
    return(
        <EmailField>
            <InpLabel>아이디(이메일)</InpLabel>
            <InpEmail />
            <CheckEmail>확인</CheckEmail>
        </EmailField>
    )
}

export default Email;