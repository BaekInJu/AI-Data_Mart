import React, { useState } from "react";
import { Title } from "../login/Styles";
import { Wrapper } from "../login/Styles";
import UserType from "./UserType";
import LoginInfo from "./LoginInfo";
import PersonalInfo from "./PersonalInfo";
import Buttons from "./Buttons";

//회원가입 페이지 컴포넌트
const Signup = () => {
    const [userType, setUserType] = useState();   //회원유형
    const [email,setEmail] = useState();        //사용자 이메일
    const [password, setPassword] = useState();     //비밀번호
    const [checkPw, setCheckPw] = useState();       //비밀번호 확인
    const [name, setName] = useState();             //이름
    const [company, setCompany] = useState();       //회사명
    const [department, setDepartmant] = useState();     //부서명

    return(
        <div>
            <Wrapper>
                <Title>회원가입 정보입력</Title>
                <UserType setUserType={setUserType}/>
                <LoginInfo 
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setCheckPw={setCheckPw}
                />
                <PersonalInfo
                    setName={setName}
                    setCompany={setCompany}
                    setDepartmant={setDepartmant}
                />
                <Buttons />
            </Wrapper>
        </div>
    )
}
                                
export default Signup;