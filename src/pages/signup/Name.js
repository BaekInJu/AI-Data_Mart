import React from "react";
import { InpContainer, InpLabel, Inp, Distance, NameWrapper } from "./Styles";

const Name = () => {
    return(
        <InpContainer>
            <InpLabel>이름</InpLabel>
            <Inp type="text" placeholder="이름을 입력해주세요."/>
        </InpContainer>
    )
}

export default Name;