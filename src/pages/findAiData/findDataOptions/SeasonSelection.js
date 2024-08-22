import React from "react";
import Option from "../../../components/Option";

//데이터 첮기의 계절 카테고리 컴포넌트
const SeasonSelection = (props) => {   //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const season = [  //계절 카테고리 옵션 배열
        "None",
        "Spring",
        "Summer",
        "Fall",
        "Winter"
      ];
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>계절별 보기</p>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={season} handler={props.func} for="season"/>
                </div>
            </div>
        </div>
    )
}

export default SeasonSelection;