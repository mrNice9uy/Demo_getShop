import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Info from "./pages/info";
import Number from "./pages/number";

function App() {
  return (
    <>
      <header></header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/number" element={<Number />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
