import React from "react";
import AllSelectButton from "../../components/AllSelectButton";
import Option from "../../components/Option";

const SiteSelection = (props) => {
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

    return(
        <div className="selection-form">
            <div className="selection-title">
                <p>사이트별 보기</p>
                <AllSelectButton />
            </div>
            <Option list={siteList} handler={props.func} for="site"/>
        </div>
    )
}

export default SiteSelection;