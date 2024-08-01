import React from "react";
import AllSelectButton from "../../../components/AllSelectButton";
import Option from "../../../components/Option";

const SiteSelection = (props) => {
    // 옵션 배열
    const siteList = [
        "HDS / AJIN / 지게차",
        "HDS / AJIN / NE",
        "HDS / AJIN / AD",
        "HDS / HOWON / NE",
        "HDS / HOWON / AD",
        "HDS / HOWON / HI",
        "MOD / BRIGADE / #001",
        "MOD / VRIGADE / #002"
      ];

      const handler = () => {
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