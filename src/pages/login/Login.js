import React, { useState } from "react";
import  { Wrapper } from "./Styles";
import { Title } from "./Styles";
import { Description } from "./Styles";
import { FindField } from "./Styles";
import IdField from "./IdField";
import PwField from "./PwField";
import SaveId from "./SaveId";
import LoginBtn from "./LoginBtn";
import FindId from "./FindId";
import FindPw from "./FindPw";


//로그인 페이지 컴포넌트
const Login = () => {
    const [inpId, setInpId] = useState();   //사용자 입력 아이디 저장 변수
    const [inpPw, setInpPw] = useState();   //사용자 입력 비밀번호 저장 변수

    //테스트용 임시 비밀번호
    const id = 'root';
    const pw = '1234';

    //로그인 정보 비교 함수
    const checkLogin = () => {
        if((inpId === id) && (inpPw === pw)){
            alert("로그인 성공");
        }else{
            if(inpId !== id){
                alert("아이디를 확인해 주세요.");
                setInpPw('');   //비밀번호 입력창 초기화
                return;
            }if(inpPw !== pw){
                alert("비밀번호를 확인해 주세요.");
                setInpPw('');   //비밀번호 입력창 초기화
                return;
            }
        }
        setInpId('');   //아이디 입력창 초기화
        setInpPw('');   //비밀번호 입력창 초기화
    }

    return(
        <div className="login">
            <Wrapper>
                <Title>로그인</Title>
                <Description>AI Data Mart에 오신것을 환영합니다.</Description>
                <IdField setInpId={setInpId} inpId={inpId}/>
                <PwField setInpPw={setInpPw} inpPw={inpPw}/>
                <SaveId />
                <LoginBtn onClick={checkLogin}/>
                <FindField>
                    <FindId />
                    <FindPw />
                </FindField>
            </Wrapper>
        </div>
    )
}

export default Login;