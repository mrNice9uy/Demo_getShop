import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Info from "./pages/info";
import Number from "./pages/number";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/number">Number</Link>
        <Link to="/info">Info</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/number" element={<Number />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
    //<div className="App">
    //<Home />
    //</div>
  );
}

export default App;
