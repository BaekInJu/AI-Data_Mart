import React from "react";
import { InpLabel, InpPassword, PasswordField } from "./Styles";

const Password = () => {
    return(
        <PasswordField>
            <InpLabel>비밀번호</InpLabel>
            <InpPassword />
        </PasswordField>
    )
}

export default Password;