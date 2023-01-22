import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "../pages/Main";
import Moods from "../pages/Moods";
import Rank from "../pages/Rank";
import Mypage from "../pages/Mypage";
import { moodStorage } from "../components/common/MoodStorage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Rank />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routers;
