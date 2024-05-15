import React, { useState, useEffect } from "react";
import "./NavBar.css"
import { BiBarChart } from "react-icons/bi";
import { Link, scrollSpy } from "react-scroll";

export default function NavBar(props) {
  const [activeSection, setActiveSection] = useState("home-section");
  const [navElementStateForSmallScreen, setNavElementStateForSmallScreen] =
    useState(false);

  //navLink elements
  function NavElements() {
    return (
      <ul className=" sm:flex items-center sm:gap-5 md:gap-8 lg:gap-10 font-poppins text-sm space-y-3 sm:space-y-0 ">
        <Link
          to="home-section"
          smooth={true}
          duration={500}
          spy={true}
          offset={0}
          onSetActive={handleSetActive}
        >
          <li
            className={` ${
              activeSection === "home-section"
                ? "text-[#288f7b] border-[#50a192] mb-2 sm:mb-0"
                : "text-black border-transparent"
            } navLinkli`}
          >
            Home
          </li>
        </Link>
        <Link
          to="lVilla-section"
          smooth={true}
          duration={500}
          spy={true}
          offset={0}
          onSetActive={handleSetActive}
        >
          <li
            className={` ${
              activeSection === "lVilla-section"
                ? "text-[#288f7b] border-[#50a192] mb-2 sm:mb-0"
                : "text-black border-transparent"
            } navLinkli`}
          >
            Luxury Villa
          </li>
        </Link>
        <Link
          to="properties-section"
          smooth={true}
          duration={500}
          spy={true}
          offset={0}
          onSetActive={handleSetActive}
        >
          <li
            className={` ${
              activeSection === "properties-section"
                ? "text-[#288f7b] border-[#50a192] mb-2 sm:mb-0"
                : "text-black border-transparent"
            } navLinkli`}
          >
            Properties
          </li>
        </Link>
        <Link
          to="blog-section"
          smooth={true}
          duration={500}
          spy={true}
          offset={0}
          onSetActive={handleSetActive}
        >
          <li
            className={` ${
              activeSection === "blog-section"
                ? "text-[#288f7b] border-[#50a192] mb-2 sm:mb-0"
                : "text-black border-transparent"
            } navLinkli`}
          >
            Blog
          </li>
        </Link>
        <Link
          to="about-section"
          smooth={true}
          duration={500}
          spy={true}
          offset={0}
          onSetActive={handleSetActive}
        >
          <li
            className={` ${
              activeSection === "about-section"
                ? "text-[#288f7b] border-[#50a192] mb-2 sm:mb-0"
                : "text-black border-transparent"
            } navLinkli`}
          >
            About Us
          </li>
        </Link>
        <Link
          to="contact-section"
          smooth={true}
          duration={500}
          spy={true}
          offset={-50}
          onSetActive={handleSetActive}
        >
          <li
            className={` ${
              activeSection === "contact-section"
                ? "text-[#288f7b] border-[#50a192] mb-2 sm:mb-0"
                : "text-black border-transparent"
            } navLinkli`}
          >
            Contacts
          </li>
        </Link>
      </ul>
    );
  }

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div
      className={`${
        props.scrollDirection === "up" ? "top-0" : "bottom-[100%]"
      } fixed  left-0 right-0 w-full bg-[#d8dde1b8] z-10 pb-2`}
    >
      <div className=" w-full pt-5 px-5 md:px-10 mx-auto flex items-center justify-between sm:justify-start gap-5 lg:gap-0 relative">
        <div className=" sm:w-3/12 lg:w-2/12 ">
          <Link
            to="home-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
            onSetActive={handleSetActive}
          >
            <div className=" cursor-pointer  w-fit text-center ">
              <h1 className=" text-2xl lg:text-3xl text-[#0c7f40] font-semibold">
                R-STATE
              </h1>
              <p className=" text-xs  mt-[-6px] font-medium">Real Estate</p>
            </div>
          </Link>
        </div>
        <div className=" w-10/12  mt-auto hidden  sm:block">
          <NavElements />
        </div>
        <BiBarChart
          onClick={() => {
            setNavElementStateForSmallScreen(!navElementStateForSmallScreen);
          }}
          className={` ${
            navElementStateForSmallScreen === true
              ? "text-[#0c7f40]"
              : "text-gray-500"
          } sm:hidden size-6  hover:text-[#0c7f40] rotate-90 `}
        />
        {navElementStateForSmallScreen && (
          <div className=" absolute top-16 h-screen z-20 left-0 mt-auto sm:hidden  w-full">
            <div className=" px-5 py-3 w-full bg-[#d8dde1b8] border">
              <NavElements />
            </div>
            <div
              onClick={() => {
                setNavElementStateForSmallScreen(
                  !navElementStateForSmallScreen
                );
              }}
              className=" w-full h-full bg-transparent"
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
