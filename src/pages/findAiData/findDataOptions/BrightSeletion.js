import React from "react";
import Option from "../../../components/Option";

//데이터 찾기의 밝기 카테고리 컴포넌트
const BrightSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const bright = [ //밝기 카테고리의 옵션을 저장할 배열
        "None",
        "Bright",
        "Dark"
      ];
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>밝기별 보기</p>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={bright} handler={props.func} for="bright"/>
                </div>
            </div>
        </div>
    )
}

export default BrightSelection;