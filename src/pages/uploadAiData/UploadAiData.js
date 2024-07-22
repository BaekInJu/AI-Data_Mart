import React, { useState } from "react";
import OrangeLine from "../../components/OrangeLine";
import "../../style/UploadAiData.css";
import "../../style/SettingUpload.css";
import SetAiProject from "./settingUpload/SetAiProject";
import search from "../../assets/image/search.png"
import calendar from "../../assets/image/calendar.png"
import SetAiDate from "./settingUpload/SetAiDate";
import SetAiCategory from "./settingUpload/SetAiCategory";
import guide from "../../assets/image/guide.png";
import CalendarModal from "../../components/CalendarModal";

const UploadAiData = () => {
  const attribute = [
    "None",
    "Indoor",
    "Outdoor"
  ];
  const bright = [
    "None",
    "Bright",
    "Dark"
  ];
  const resolution = [
    "None",
    "2M",
    "4M"
  ];
  const season = [
    "None",
    "Spring",
    "Summer",
    "Fall"
  ];
  const weather = [
    "None",
    "Clear",
    "Rain",
    "Snow"
  ];
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
              <span className="wrap-p">
                <p>생성일</p>
              </span>
              <SetAiDate img={calendar}/>
            </span>
          </div>
        </div>
        <div className="body-middle">
          <SetAiCategory title="위치" list={attribute}/>
          <SetAiCategory title="날씨"list={weather}/>
          <SetAiCategory title="밝기" list={bright}/>
          <SetAiCategory title="계절" list={season}/>
          <SetAiCategory title="해상도" list={resolution}/>   
          <hr />
        </div>
        <img id="guide" src={guide} alt="NoImage" />
      </div>
    </div>
  );
};
export default UploadAiData;
