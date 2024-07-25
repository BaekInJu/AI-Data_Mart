import React from "react";
import OptionRadio from "../../../components/OptionRadio";
import add from "../../../assets/image/add.png";

const SetProduct = (props) => {
    const product = ["HDS", "MOD"];
    return(
        <div className="set-upload-category">
            <div className="set-title">
                <span className="title">
                    <p>위치</p>
                </span>
                <span className="fix">
                    <img src={add} alt="NoImage"/>
                </span>
            </div>
            <OptionRadio list={product} handler={props.handler} for="product"/>
        </div>
    )
}

export default SetProduct;