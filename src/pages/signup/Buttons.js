import React from "react";
import { ButtonsWrapper, CancelButton, JoinButton } from "./Styles";

const Buttons = () => {
    return(
        <ButtonsWrapper>
            <CancelButton>취소</CancelButton>
            <JoinButton>가입</JoinButton>
        </ButtonsWrapper>
    )
}

export default Buttons;