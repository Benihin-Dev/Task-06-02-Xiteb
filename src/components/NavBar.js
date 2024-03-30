import React, { useState } from "react";
import { Link } from "react-scroll";
import logoImg from "../images/logoWhite.png";
import logoImg2 from "../images/logoBlue.png";

export default function NavBar({ signupState, setSignupState }) {
  const [visibleLogo, setVisibleLogp] = useState(logoImg);
  return (
    <div className=" w-full text-white flex pt-5 items-center justify-between">
      <img
        onMouseEnter={() => {
          setVisibleLogp(logoImg2);
        }}
        onMouseLeave={() => {
          setVisibleLogp(logoImg);
        }}
        src={visibleLogo}
        className=" w-[8vw] sm:w-[4vw] duration-300"
        alt=""
      />

      {signupState === true ? (
        <button
          onClick={() => {
            setSignupState(false);
          }}
          className=" py-[4px] px-8 sm:py-[7px] sm:px-8 shadow-lg rounded-xl bg-[#ff6262] hover:bg-[#fc4141] duration-200"
        >
          Home
        </button>
      ) : (
        <>
          <ul className=" flex justify-around items-center w-7/12  sm:w-fit sm:gap-10">
            <Link
              to="home-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
            >
              <li className=" cursor-pointer hover:text-[#ff6262] duration-200">
                Home
              </li>
            </Link>
            <Link
              to="features-section"
              smooth={true}
              duration={800}
              spy={true}
              offset={-70}
            >
              <li className=" cursor-pointer hover:text-[#ff6262] duration-200">
                Features
              </li>
            </Link>
            <Link
              to="pricing-section"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-20}
            >
              <li className=" cursor-pointer hover:text-[#ff6262] duration-200">
                Pricing
              </li>
            </Link>
          </ul>
          <button
            onClick={() => {
              setSignupState(true);
            }}
            className=" py-[4px] px-4 sm:py-[7px] sm:px-6 shadow-lg rounded-xl bg-[#ff6262] hover:bg-[#fc4141] duration-200"
          >
            Sign up
          </button>
        </>
      )}
    </div>
  );
}
