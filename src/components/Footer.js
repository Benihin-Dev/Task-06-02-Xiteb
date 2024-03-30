import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import logoImg from "../images/logoWhite.png";
import logoImg2 from "../images/logoBlue.png";

export default function Footer() {
  const [visibleLogo, setVisibleLogp] = useState(logoImg);
  const [footerContent, setfooterContent] = useState([
    "Team",
    "Press",
    "Services",
    "Projects",
    "Affiliate",
    "Terms of use",
    "Privacy Policy",
    "Fees",
    "Contact us",
  ]);
  return (
    <div className=" w-full bg-[#12183d] pt-5 pb-10 relative">
      <div className=" w-11/12 sm:w-9/12 sm:flex items-center mx-auto text-white pt-12 sm:pb-5">
        <div className=" hidden sm:block sm:w-1/2">
          <img
            onMouseEnter={() => {
              setVisibleLogp(logoImg2);
            }}
            onMouseLeave={() => {
              setVisibleLogp(logoImg);
            }}
            src={visibleLogo}
            className=" w-[8vw] sm:w-[6vw] duration-300"
            alt=""
          />
          <div className=" text-sm mt-10">
            <p>Copyright 2024 Coinwave.</p>
            <p>All tights reserved</p>
          </div>
        </div>
        <div className=" sm:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-[3vw]">
          {footerContent.map((content, index) => (
            <p key={index} className=" hover:text-[#fc4141] duration-200">
              {content}
            </p>
          ))}
        </div>
        <div className=" sm:hidden flex justify-around items-center sm:w-1/2 mt-5">
          <img
            onMouseEnter={() => {
              setVisibleLogp(logoImg2);
            }}
            onMouseLeave={() => {
              setVisibleLogp(logoImg);
            }}
            src={visibleLogo}
            className=" w-[12vw]  duration-300"
            alt=""
          />
          <div className=" text-sm">
            <p>Copyright 2024 Coinwave.</p>
            <p>All tights reserved</p>
          </div>
        </div>
      </div>
      <Link
        to="home-section"
        smooth={true}
        duration={800}
        spy={true}
        offset={-150}
      >
        <div className=" absolute top-[-5%] right-5 py-1 px-4 items-center justify-center  flex shadow-lg rounded-full cursor-pointer bg-[#ff6262] hover:bg-[#fc4141] duration-200">
          <MdKeyboardDoubleArrowUp className=" size-5" />
          <button className=" ">Scroll up</button>
        </div>
      </Link>
    </div>
  );
}
