import React from "react";
import Option from "../../../components/Option";

//데이터 찾기의 속성 카테고리 컴포넌트
const AttributeSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const attribute = [  //속성 카테고리의 옵션을 저장할 배열
        "None",
        "Indoor",
        "Outdoor"
      ];
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>속성별 보기</p>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={attribute} handler={props.func} for="attribute"/>
                </div>
            </div>
        </div>
    )
}

export default AttributeSelection;