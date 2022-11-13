import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./PageComponents/Home";
import ListPage from "./PageComponents/ListPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-page" element={<ListPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
