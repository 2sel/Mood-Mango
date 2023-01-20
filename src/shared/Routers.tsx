import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
