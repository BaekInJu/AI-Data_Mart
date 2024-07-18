import React from "react";
import OrangeLine from "../../components/OrangeLine";
import "../../style/UploadAiData.css"
import SetAiProject from "./SetAiProject";
import search from "../../assets/image/search.png"
import calender from "../../assets/image/calender.png"
const UploadAiData = () => {
  return (
    <div className="upload-data-body">
      <OrangeLine text="데이터 올리기"/>
      <div className="options">
        <div className="margin-box">
          <div className="body-top">
            <sapn className="set-project">
              <span className="wrap-p">
                <p>프로젝트</p>
              </span>
              <SetAiProject img={search}/>
            </sapn>
            <span className="set-date">
              <sapn className="wrap-p">
                <p>생성일</p>
              </sapn>
              <SetAiProject img={calender}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UploadAiData;
