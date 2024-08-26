import React from "react";
import Option from "../../../components/Option";
import { AllSelectionButtonFunc } from "../../../components/AllSelectionButtonfunc";
import AllSelectButton from "../../../components/AllSelectButton";

//데이터 찾기의 해상도 카테고리 컴포넌트
const ResolutionSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const resolution = [   //해상도 카테고리의 옵션 배엵
        "None",
        "2M",
        "4M"
      ];
    
    const getResolution = (event) => {
        const value = event.target.value === "" ? "None" : event.target.value;

        props.setResolutionType((prev) => {
            if (event.target.checked) {
                // 체크된 경우 배열에 추가
                return [...prev, value];
            } else {
                // 체크 해제된 경우 배열에서 제거
                return prev.filter((item) => item !== value);
            }
        });
    };

    const allBtn = (event) => {
        AllSelectionButtonFunc(event, resolution, props.setResolutionType, "resolution");
    }
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>해상도별 보기</p>
                <AllSelectButton for="resolution" click={allBtn} />
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={resolution} handler={getResolution} for="resolution"/>
                </div>
            </div>
        </div>
    )
}

export default ResolutionSelection;