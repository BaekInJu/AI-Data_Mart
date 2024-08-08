import React from "react";
import OptionRadio from "../../../components/OptionRadio";

//데이터 올리기 페이지의 해상도 카테고리 컴포넌트
const SetResolution = (props) => { //props.func : 선택한 옵션 부모 컴포넌트 배열에 저장하는 함수

    const resolution = [  //해상도 카테고리 옵션 배열
        "None",
        "2M",
        "4M"
      ];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>해상도</p>
                </span>
                <span className="fix">
                    {/* <img src={fix} alt="NoImage"/>   */}
                </span>
            </div>
            <OptionRadio list={resolution} handler={props.func} for="resolution"/>
        </div>
    )
}

export default SetResolution;