import React from "react";
import { Inp, InpContainer, InpLabel, Serch } from "./Styles";
import SerchIcon from "../../assets/image/search.png"

const Company = () => {
    return(
        <InpContainer>
            <InpLabel>기업(기관)명</InpLabel>
            <Inp type="text" placeholder="기업명을 입력해 주세요" />
        </InpContainer>
    )
}

export default Company;