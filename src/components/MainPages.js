import React from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import IntroPage from "../components/IntroPage";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Review from "./Review";

export default function MainPages() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<IntroPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/review" element={<Review />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
