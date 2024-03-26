import React from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import IntroPage from "../components/IntroPage";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Review from "./Review";
import { MainContextProvider } from "./MainContextProvider";
import TouristPlace from "./TouristPlace";
import PlacesInDistrict from "./PlacesInDistrict";

export default function MainPages() {
  return (
    <>
      <MainContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<IntroPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/districtComponent" element={<PlacesInDistrict/>}></Route>
            <Route
              path="/touristPlaceComponent"
              element={<TouristPlace />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </MainContextProvider>
    </>
  );
}
