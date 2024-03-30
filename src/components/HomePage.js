import React, { useState } from "react";
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
import Singup from "./Singup";

export default function HomePage() {
  const [signupState, setSignupState] = useState(false);
  return (
    <>
      {signupState && (
        <div className=" w-full">
          <div className=" z-0">
            <BgImage />
          </div>
          <div className=" z-20 w-11/12 sm:w-9/12 mx-auto ">
            <NavBar signupState={signupState} setSignupState={setSignupState} />
          </div>
          <Singup signupState={signupState} setSignupState={setSignupState} />
        </div>
      )}

      {!signupState && (
        <div className=" w-full">
          <div className=" z-0">
            <BgImage />
          </div>
          <div className=" z-20 w-11/12 sm:w-9/12 mx-auto ">
            <NavBar signupState={signupState} setSignupState={setSignupState} />
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
        </div>
      )}
      <Footer />
    </>
  );
}
