import React from "react";
import OptionRadio from "../../../components/OptionRadio";

//데이터 올리기 페이지의 위치 카테고리 컴포넌트
const SetProduct = (props) => { //props.func : 선택한 옵션 부모 컴포넌트 배열에 저장하는 함수
    const product = ["HDS", "MOD"];  //위치 옵션 배열
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>위치</p>
                </span>
                <span className="fix">
                    {/* <img src={add} alt="NoImage"/> */}
                </span>
            </div>
            <OptionRadio list={product} handler={props.handler} for="product"/>
        </div>
    )
}

export default SetProduct;