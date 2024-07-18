import React from "react";
import search from "../../../assets/image/search.png";

const SearchInput = () => {
    return(
        <div className="find-data-input-form">
            <form method="post">
                <input 
                type="text" 
                placeholder="검색어를 입력하세요"/>
                <button><img src={search} alt="NoImage"/></button>
            </form>
        </div>
    )
}

export default SearchInput;