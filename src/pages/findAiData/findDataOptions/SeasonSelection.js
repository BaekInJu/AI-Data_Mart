import React from "react";
import Option from "../../../components/Option";
import AllSelectButton from "../../../components/AllSelectButton";
import { AllSelectionButtonFunc } from "../../../components/AllSelectionButtonfunc";

//데이터 첮기의 계절 카테고리 컴포넌트
const SeasonSelection = (props) => {   //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const season = [  //계절 카테고리 옵션 배열
        "None",
        "Spring",
        "Summer",
        "Fall",
        "Winter"
      ];
    const getSeason = (event) => {
        const value = event.target.value === "" ? "None" : event.target.value;

        props.setSeasonType((prev) => {
            if (event.target.checked) {
                // 체크된 경우 배열에 추가
                return [...prev, value];
            } else {
                // 체크 해제된 경우 배열에서 제거
                return prev.filter((item) => item !== value);
            }
        });
    }

    const allBtn = (event) => {
        AllSelectionButtonFunc(event, season, props.setSeasonType, "season");
    }
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>계절별 보기</p>
                <AllSelectButton for="season" click={allBtn} />
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={season} handler={getSeason} for="season"/>
                </div>
            </div>
        </div>
    )
}

export default SeasonSelection;