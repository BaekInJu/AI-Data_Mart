import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png"

//메뉴 바 컴포넌트
const Navigation = () => {
    return(
        <>
        <div className="navigation">
            <div className="navi-inner-wrapper">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="menu">
                    <Link to="/ai"><p>AI 현황보기</p></Link> 
                    <Link to="/findAiData"><p>AI 데이터 찾기</p></Link> 
                    <Link to="/uploadAiData"><p>AI 데이터 올리기</p></Link> 
                    <Link to="/findModelData"><p>AI 모델 찾기</p></Link>
                    <Link to="/uploadModelData"><p>AI 모델 올리기</p></Link> 
                </div>
                
            </div>
            <div className="registration">
                    <Link to="/signup">회원가입</Link>
                    <Link to="/login">로그인</Link>
                </div>
        </div>
        <hr className="navigation-bottom-hr"/>
        </>
    )
}

export default Navigation;

