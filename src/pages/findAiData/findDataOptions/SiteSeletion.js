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

      //All select 버튼 handler
      const allSelection = () => {
        let test = document.getElementById("site : HDS / AJIN / 지게차");
        let test1 = document.getElementById("site");
        if(test1.checked === true){
            test.checked = true;
        }else{
            test.checked = false;
        }
      }

    return(
        <div className="selection-form">
            <div className="selection-title">
                <p>사이트별 보기</p>
                <AllSelectButton for="site" id="site" func={allSelection}/>
            </div>
            <Option list={siteList} handler={props.func} for="site"/>
        </div>
    )
}

export default SiteSelection;