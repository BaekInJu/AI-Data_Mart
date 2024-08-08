import React, { useState } from "react";
import "../../style/FindAiData.css";
import OrangeLine from "../../components/OrangeLine";
import SiteSelection from "./findDataOptions/SiteSeletion";
import DateSelection from "./findDataOptions/DateSelection";
import ObjectSelection from "./findDataOptions/ObjectSelection";
import AttributeSelection from "./findDataOptions/AttributeSelection";
import WeatherSeletion from "./findDataOptions/WeatherSeletion";
import BrightSelection from "./findDataOptions/BrightSeletion";
import SeasonSelection from "./findDataOptions/SeasonSelection";
import ResolutionSelection from "./findDataOptions/Resoluntion";
import FindDataSearch from "./findDataShow/FindDataSearch";
import FindDataSet from "./findDataShow/FindDataSet";

//데이터 찾기 페이지 구성 컴포넌트, 최상위 컴포넌트 
const FindAiData = () => {
  const [clicked, setClicked] = useState([]);   //체크된 속성 배열(JSON)
  
  //체크 항목 clicked배열에 추가 함수
  const handlerOption = (click) => {  //click에는 json형식으로 넘어옴
    setClicked((prevClicked) => {
      let newClicked = [...prevClicked];  //기존의 배열을 새로운 배열에 저장해 줌
      for(let i=0; i<newClicked.length; i++){
        if(JSON.stringify(newClicked[i]) === JSON.stringify(click)){  //문자열로 변환하여 비교
          newClicked = newClicked.filter(item => JSON.stringify(item) !== JSON.stringify(click));
          return newClicked;
        }
      }
      newClicked.push(click);  //기존에 없는 값이면 추가
      console.log("Updated array:", newClicked);   //테스트 출력
      return newClicked;
    });
  }

  return (
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
                <ResolutionSelection func={handlerOption}/>
              </span>
            </span>
          </div>
        </div>
        <div className="find-data-show">
          <div className="find-data-search">
            <FindDataSearch />
            <hr />
          </div>
          <div className="data-set-list">
            <FindDataSet num={23}/>
          </div>
        </div>
    </div>
  );
};

export default FindAiData;

