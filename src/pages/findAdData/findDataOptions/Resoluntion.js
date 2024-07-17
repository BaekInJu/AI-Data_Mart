import React from "react";
import Option from "../../../components/Option";

const ResolutionSelection = (props) => {
    const resolution = [
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