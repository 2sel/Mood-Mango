import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rank from "../pages/Rank";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rank />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
