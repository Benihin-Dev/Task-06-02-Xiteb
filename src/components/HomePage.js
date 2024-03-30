import React from "react";
import { Element } from "react-scroll";
import BgImage from "./BgImage";
import NavBar from "./NavBar";
import Intro from "./Intro";
import CardIntro from "./CardIntro";
import TimeManage from "./TimeManage";
import SupportConversation from "./SupportConversation";
import Pricing from "./Pricing";
import Questions from "./Questions";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <div className=" z-0">
        <BgImage />
      </div>
      <div className=" z-20 w-11/12 sm:w-9/12 mx-auto ">
        <NavBar />
        <Element name="home-section">
          <Intro />
        </Element>
      </div>
      <CardIntro />
      <Element name="features-section">
        <TimeManage />
      </Element>
      <SupportConversation />
      <Element name="pricing-section">
        <Pricing />
      </Element>
      <Questions />
      <Footer />
    </>
  );
}
