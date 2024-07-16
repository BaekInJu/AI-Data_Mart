import React, { useState } from "react";
import OrangeLine from "../components/OrangeLine";
import SiteSelection from "./findDataOptions/SiteSeletion";
import DateSelection from "./findDataOptions/DateSelection";
import ObjectSelection from "./findDataOptions/ObjectSelection";
import AttributeSelection from "./findDataOptions/AttributeSelection";
import WeatherSeletion from "./findDataOptions/WeatherSeletion";
import BrightSelection from "./findDataOptions/BrightSeletion";
import SeasonSelection from "./findDataOptions/SeasonSelection";
import ResloutionSelection from "./findDataOptions/Resoluntion";

const FindAiData = () => {
  //체크된 속성 배열
  const [clicked, setClicked] = useState([]);
  
  //체크 항목 배열에 추가 함수
  const handlerOption = (click) => {
    setClicked((prevClicked) => {
      let newClicked = [...prevClicked];
      let test = Object.entries(newClicked);
      for(let i=0; i<newClicked.length; i++){
        console.log("굴러온" + click);
        console.log("박힌" + newClicked);
        if(test[i] === click){
          return;
        }
        
      }
      if (newClicked.includes(click)) {
        newClicked = newClicked.filter(item => item !== click);
      } else {
        newClicked.push(click);
      }
      console.log("Updated array:", newClicked);
      return newClicked;
    });
  }

  return (
    <>
      <div className="find-data-body">
        <OrangeLine  className="orange-line" text="데이터 찾기"/>
          <div className="options">
            <div className="margin-box">
              <SiteSelection func={handlerOption}/>
              <DateSelection func={handlerOption}/>
              <span className="option-right">
                <span className="option-right-top">
                  <ObjectSelection func={handlerOption}/>
                  <AttributeSelection func={handlerOption}/>
                  <WeatherSeletion func={handlerOption}/>
                </span>
                <span className="option-right-bottom">
                  <BrightSelection func={handlerOption}/>
                  <SeasonSelection func={handlerOption}/>
                  <ResloutionSelection func={handlerOption}/>
                </span>
              </span>
            </div>
          </div>
      </div>
    </>
  );
};

export default FindAiData;
