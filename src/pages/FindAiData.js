import React, { useState } from "react";
import OrangeLine from "../components/OrangeLine";
import Option from "../components/Option";
import AllSelectButton from "../components/AllSelectButton";
import SiteSelection from "./findDataOptions/SiteSeletion";
import DateSelection from "./findDataOptions/DateSelection";


const FindAiData = () => {

  const object = [
    "Person",
    "Cyclist",
    "MotorCyclist",
    "Car"
  ];

  const attribute = [
    "None",
    "Indoor",
    "Outdoor"
  ];

  const weather = [
    "None",
    "Clear",
    "Rain",
    "Snow"
  ];

  const bright = [
    "None",
    "Bright",
    "Dark"
  ];

  const season = [
    "None",
    "Spring",
    "Summber",
    "Fall",
    "Winter"
  ];

  const resolution = [
    "None",
    "2M",
    "4M"
  ];

  const [clicked, setClicked] = useState("");
  const handlerOption = (click) => {
    setClicked(click);
  }
  return (
    <>
      <div className="find-data-body">
        <OrangeLine  className="orange-line" text="데이터 찾기"/>
          <div className="options">
            <SiteSelection />
            <DateSelection />
          </div>
      </div>
    </>
  );
};

export default FindAiData;
