import React from "react";
import { BorderLine, InpUserType, InpUserTypeOption, Label, Line, UserTypeLabels, UserTypeWrapper } from "./Styles";

const UserType = (props) => {   //props.setUserType : 회원유형 set함수
    return(
        <UserTypeWrapper>
            <Label>회원 유형</Label>
            <BorderLine />
                <InpUserTypeOption>
                    <InpUserType id="user" name="userType"/><UserTypeLabels htmlFor="user">일반사용자</UserTypeLabels>
                </InpUserTypeOption>
                <InpUserTypeOption>
                    <InpUserType id="field-manager" name="userType"/><UserTypeLabels htmlFor="field-manager">현장작업자</UserTypeLabels>
                </InpUserTypeOption>
                <InpUserTypeOption>
                    <InpUserType id="sales-manager" name="userType"/><UserTypeLabels htmlFor="sales-manager">영업관리자</UserTypeLabels>
                </InpUserTypeOption>
                <InpUserTypeOption>
                    <InpUserType id="web-manager" name="userType"/><UserTypeLabels htmlFor="web-manager">웹관리자</UserTypeLabels>
                </InpUserTypeOption>
            <Line /> 
        </UserTypeWrapper>
    )
}

export default UserType;