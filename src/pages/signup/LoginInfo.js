import React from "react";
import { BorderLine, Label, Line, UserInfoWrapper } from "./Styles";
import Email from "./Email";

const LoginInfo = () => {
    return(
        <UserInfoWrapper>
            <Label>로그인 정보</Label>
            <BorderLine />
                <Email />
            <Line />
        </UserInfoWrapper>
    )
}

export default LoginInfo;