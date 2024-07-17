import React from "react";
import AllSelectButton from "../../../components/AllSelectButton";
import Option from "../../../components/Option";

const DateSelection = (props) => {
    const year = [
        "2021년",
        "2022년",
        "2024년"
    ];

    const month = [
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
                <span className="option-year">
                    <Option list={year} handler={props.func} for="year"/>
                </span>
                <span className="option-month">
                    <Option list={month} handler={props.func} for="month"/>    
                </span>
            </div>
        </div>
    )
}

export default DateSelection;