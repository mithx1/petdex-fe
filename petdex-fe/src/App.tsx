import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
