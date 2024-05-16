import { useState, useEffect } from "react";
import { MainContext } from "./components/dataContext/MainContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Element } from "react-scroll";
import MainPage from "./components/MainPage";
import SingleVillaPage from "./components/luxuryVilla/singleVillaPage/SingleVillaPage";

function App() {
  return (
    <BrowserRouter>
      <MainContext>
        <div className=" font-poppins">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/villa" element={<SingleVillaPage />} />
          </Routes>
        </div>
      </MainContext>
    </BrowserRouter>
  );
}

export default App;
