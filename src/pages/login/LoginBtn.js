import React from "react";
import { LoginButton } from "./Styles";

const LoginBtn = (props) => {
    return(
        <div>
        <LoginButton onClick={props.onClick}> 로그인</LoginButton>
        </div>
    )
}

export default LoginBtn;