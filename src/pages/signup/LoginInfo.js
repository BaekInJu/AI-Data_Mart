import React from "react";
import { BorderLine, Label, Line, UserInfoWrapper } from "./Styles";
import Email from "./Email";
import Password from "./Password";

const LoginInfo = () => {
    return(
        <UserInfoWrapper>
            <Label>로그인 정보</Label>
            <BorderLine />
                <Email />
                <Password />
            <Line />
        </UserInfoWrapper>
    )
}

export default LoginInfo;