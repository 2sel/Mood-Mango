import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "../pages/Main";
import Moods from "../pages/Moods";

const Routers = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Moods />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routers;
