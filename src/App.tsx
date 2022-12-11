import "./App.scss";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "PageComponents/Home";
import ListPage from "PageComponents/ListPage";

import Header from "Components/Header";
import Footer from "Components/Footer";
import Loader from "Components/Loader";

import { useAppSelector } from "Store/hooks";

function App() {
  const loading = useAppSelector((state) => state.loader.isLoading);

  console.log("loading -->", loading);

  return (
    <div className="App">
      <header className="App__header">
        <Header />
      </header>

      <section>
        <div className="App__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-page" element={<ListPage />} />
          </Routes>
        </div>
      </section>

      <Footer />

      <Loader loading={loading} />
    </div>
  );
}

export default App;
