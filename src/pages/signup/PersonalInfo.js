import React from "react";
import { PersonalInfoWrapper } from "../login/Styles";
import { BorderLine, Label, Line } from "./Styles";
import Name from "./Name";
import Company from "./Company";
import Department from "./Department";

const PersonalInfo = () => {
    return(
        <PersonalInfoWrapper>
            <Label>개인정보</Label>
            <BorderLine />
                <Name/>
                <Company />
                <Department />
            <Line />
        </PersonalInfoWrapper>
    )
}

export default PersonalInfo;