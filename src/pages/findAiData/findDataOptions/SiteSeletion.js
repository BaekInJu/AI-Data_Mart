import React from "react";
import AllSelectButton from "../../../components/AllSelectButton";
import Option from "../../../components/Option";

//데이터 찾기 사이트 카테고리 컴포넌트
const SiteSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const siteList = [  //사이트 카테고리 옵션 배열
        "HDS / AJIN / 지게차",
        "HDS / AJIN / NE",
        "HDS / AJIN / AD",
        "HDS / HOWON / NE",
        "HDS / HOWON / AD",
        "HDS / HOWON / HI",
        "MOD / BRIGADE / #001",
        "MOD / VRIGADE / #002"
      ];

      const handler = () => {    //All버튼 핸들러 함수
        let test = document.getElementById("site : HDS / AJIN / 지게차");
        let test1 = document.getElementById("site");
        if(test1.checked === true){
            test.checked = true;
            props.func(test);
        }else{
            test.checked = false;
        }
    }
    const onChange = (event) => {
        props.handler(JSON.parse(`{${event.target.value}}`));    //json형식으로 넘어감
    }
    
    return(
        <div className="selection-form">
            <div className="selection-title">
                <p>사이트별 보기</p>
                <AllSelectButton for="site" id="site" list={siteList} handler={handler}/>
            </div>
            <Option list={siteList} handler={props.func} for="site"/>
        </div>
    )
}

export default SiteSelection;