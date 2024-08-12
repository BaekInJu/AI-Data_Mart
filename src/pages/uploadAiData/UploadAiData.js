import React, { useState } from "react";
import OrangeLine from "../../components/OrangeLine";
import "../../style/UploadAiData.css";
import "../../style/SettingUpload.css";
import SetAiProject from "./settingUpload/SetAiProject";
import search from "../../assets/image/search.png"
import calendar from "../../assets/image/calendar.png"
import SetAiDate from "./settingUpload/SetAiDate";
import guide from "../../assets/image/guide.png";
import UploadAiFile from "./UploadAiFile";
import SetAttribute from "./settingUpload/SetAttribute";
import SetSeason from "./settingUpload/SetSeason";
import SetWeather from "./settingUpload/SetWeather";
import SetBright from "./settingUpload/SetBright";
import SetResolution from "./settingUpload/SetResolution";

//데이터 올리기 페이지 구성 컴포넌트
const UploadAiData = () => {
  
  const [clicked, setClicked] = useState([]);   //선택된 카테고리 저장 배열
  //체크 항목 배열에 추가 함수
  const handlerOption = (click) => {     //click은 json형식으로 들어옴
    setClicked((prevClicked) => {
      let newClicked = [...prevClicked];    //그 전의 배열을 임시 저장해둠
      for(let i=0; i<newClicked.length; i++){
        if(JSON.stringify(newClicked[i]) === JSON.stringify(click)){   //저장되어 있던 배열을 돌면서 새로 들어온 type과 중복되는지 확인
          newClicked = newClicked.filter(item => JSON.stringify(item) !== JSON.stringify(click));    //중복되는 type의 value를 변경
        }
        return newClicked;  
      }
      newClicked.push(click);   //새로 들어온 type이라면 배열에 추가
      console.log("Updated array:", newClicked);   //테스트 출력
      return newClicked;
    });
  } 
  
  const upload = () => {   //사용자가 올린 파일을 서버에 전송하는 함수
    console.log("uploading...");      //테스트 출력
  }
  
  const [percent,setPercent] = useState(43.25);     //업로드 상태를 저장할 변수

  return (
    <div className="upload-data-body">
      <OrangeLine text="데이터 올리기"/>
      <div className="options">
        <div className="margin-box">
          <div className="body-top">
            <span className="set-project">
              <span className="wrap-p">
                <p>프로젝트</p>
              </span>
              <SetAiProject img={search} func={handlerOption} />
            </span>
            <span className="set-date">
              <span className="wrap-p">
                <p>생성일</p>
              </span>
              <SetAiDate img={calendar}/>
            </span>
          </div>
        </div>
        <div className="body-middle">
          <SetAttribute func={handlerOption}/>
          <SetWeather func={handlerOption} />
          <SetBright func={handlerOption}/>
          <SetSeason func={handlerOption}/>
          <SetResolution func={handlerOption}/> 
          <hr />
        </div>
      </div>
      <div className="upload-file">
        <UploadAiFile />
      </div>
      <div className="uploading-bar">
        <p id="progress-state">진행률</p>
        <div className="frame">
          <div id="color-bar" style={{
            height: 30,
            borderRadius: 20,
            width: `${percent}%`, 
            display: "flex",
            justifyContent: "left",
            background: "rgb(245, 123, 18)",
          }}>
          </div>
          <p id="percent">{percent}%</p>
        </div>
        <button id="upload-button" onClick={upload}>업로드</button>
        <img id="guide" src={guide} alt="NoImage" />
      </div>
    </div>
  );
};
export default UploadAiData;