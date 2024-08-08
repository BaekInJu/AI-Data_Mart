import React from "react";
import Option from "../../../components/Option";

//데이터 찾기의 해상도 카테고리 컴포넌트
const ResolutionSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const resolution = [   //해상도 카테고리의 옵션 배엵
        "None",
        "2M",
        "4M"
      ];
    return(
        <div className="selection-form-tiny">
            <div className="selection-title">
                <p>해상도별 보기</p>
            </div>
            <div className="option-list">
                <div className="tiny-list">
                    <Option list={resolution} handler={props.func} for="resolution"/>
                </div>
            </div>
        </div>
    )
}

export default ResolutionSelection;