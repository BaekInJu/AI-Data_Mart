import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png"

const Navigation = () => {
    return(
        <>
        <div className="navigation">
            <div className="navi-inner-wrapper">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="menu">
                    <Link to="/ai"><h3>AI 현황보기</h3></Link> 
                    <Link to="/findAiData"><h3>AI 데이터 찾기</h3></Link> 
                    <Link to="/uploadAiData"><h3>AI 데이터 올리기</h3></Link> 
                    <Link to="/findModelData"><h3>AI 모델 찾기</h3></Link>
                    <Link to="/uploadModelData"><h3>AI 모델 올리기</h3></Link> 
                </div>
                <div className="registration">
                    <Link to="/login">로그인</Link>
                    <Link to="/signup">회원가입</Link>
                </div>
            </div>
        </div>
        <hr className="navigation-bottom-hr"/>
        </>
    )
}

export default Navigation;

