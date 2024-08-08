import React from "react";
import AllSelectButton from "../../../components/AllSelectButton";
import Option from "../../../components/Option";

//데이터 찾기의 날짜 카테고리 컴포넌트
const DateSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const year = [  //연도 속성 저장 배열
        "2021년",
        "2022년",
        "2024년"
    ];

    const month = [  //월 속성 저장 배열
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
    ];

    return(
        <div className="selection-form" id="date-selection-form">
            <div className="selection-title">
                <p>생성날짜별 보기</p>
                <AllSelectButton for="date"/>
            </div>
            <div className="option-list">
                <div className="option-year">
                    <Option list={year} handler={props.func} for="year"/>
                </div>
                <div className="option-month">
                    <Option list={month} handler={props.func} for="month"/>    
                </div>
            </div>
        </div>
    )
}

export default DateSelection;