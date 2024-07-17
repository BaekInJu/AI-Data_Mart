import React from "react";
import { Routes, Route } from "react-router-dom";
import Ai from "../pages/Ai";
import FindAiData from "../pages/findAdData/FindAiData";
import FindModelData from "../pages/FindModelData";
import UploadAiData from "../pages/UploadAiData";
import UploadModelData from "../pages/UploadModelData";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/ai" element={<Ai />} />                             {/* AI 현황 페이지 */}
        <Route path="/findAiData" element={<FindAiData />} />             {/* AI찾기 페이지 */}
        <Route path="/uploadAiData" element={<UploadAiData />} />         {/* AI올리기 페이지 */}
        <Route path="/findModelData" element={<FindModelData />} />       {/* Model찾기 페이지 */}
        <Route path="/uploadModelData" element={<UploadModelData />} />   {/* Model올리기 페이지 */}
        <Route path="/login" element={<Login />} />                       {/* Login 페이지 */}
        <Route path="/signup" element={<Signup />} />                     {/* 회원가입 페이지 */}
      </Routes>
    </div>
  );
};

export default Router;
