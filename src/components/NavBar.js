import React, { useState, useEffect } from "react";
import { useData } from "./MainContextProvider";
import logo from "../images/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import MiniSearchBtn from "./MiniSearchBtn";

export default function NavBar() {
  const { miniSearchBoxStatus, setminiSearchBoxStatus } = useData();
  const [showProvinceMenu, setShowProvinceMenu] = useState(false);
  const [showDistrictMenu, setShowDistrictMenu] = useState(false);
  const [provinces, setProvinces] = useState([
    "Central",
    "Eastern",
    "Northern",
    "North-Central",
    "North-Western",
    "Sabaragamuwa",
    "Southern",
    "Uva",
    "Western",
  ]);
  const [districts, setDistricts] = useState([
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Moneragala",
    "Mullaitivu",
    "Nuwara-Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ]);
  const [navSubElemnetsState, setnavSubElemnetsState] = useState(false);

  useEffect(() => {
    scrollSpy.update();
  }, []);
  return (
    <div className=" fixed w-full z-20 mt-[-40px] bg-[#fff5]">
      <div className=" relative w-11/12 sm:w-10/12 lg:w-9/12 lg:px-10 mx-auto flex items-end justify-between mt-0 pb-2 pt-1 bg-[#ffffffbb]">
        <Link to="/">
          <img className=" h-12" src={logo} alt="" />
        </Link>
        <div className=" flex gap-5 items-center w-9/12 justify-end relative">
          <ul className={` hidden sm:flex gap-6`}>
            <Link to="/">
              <li className="flex items-end pt-[3px] justify-center">
                <IoHome className=" text-gray-500 hover:text-gray-800 duration-200" />
              </li>
            </Link>
            <li
              onMouseEnter={() => {
                setShowProvinceMenu(!showProvinceMenu);
              }}
              onMouseLeave={() => {
                setShowProvinceMenu(!showProvinceMenu);
              }}
              className=" relative flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer"
            >
              Province
              <MdKeyboardArrowDown
                className={` ${showProvinceMenu && "rotate-180"} mt-1`}
              />
              {showProvinceMenu && (
                <div
                  className={` absolute w-[170%] left-[-10px] top-[100%] h-44 border overflow-y-scroll overflow-x-hidden mb-10 bg-white custom border-b-2`}
                >
                  {provinces.map((province, index) => (
                    <button
                      id={index}
                      className=" border-b w-full text-start px-1 pt-1 text-gray-600 hover:bg-gray-50 hover:text-black   border-gray-100"
                    >
                      {province}
                    </button>
                  ))}
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => {
                setShowDistrictMenu(!showDistrictMenu);
              }}
              onMouseLeave={() => {
                setShowDistrictMenu(!showDistrictMenu);
              }}
              className=" relative flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer"
            >
              District
              <MdKeyboardArrowDown
                className={` ${showDistrictMenu && "rotate-180"} mt-1`}
              />
              {showDistrictMenu && (
                <div
                  className={` absolute w-[180%] left-[-10px] top-[100%] h-52 border overflow-y-scroll overflow-x-hidden mb-5 bg-white custom border-b-2`}
                >
                  {districts.map((district, index) => (
                    <button
                      id={index}
                      className=" border-b w-full text-start px-1 pt-1 text-gray-600 hover:bg-gray-50 hover:text-black   border-gray-100"
                    >
                      {district}
                    </button>
                  ))}
                </div>
              )}
            </li>
            <Link to="/review">
              <li className=" flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer">
                Review
              </li>
            </Link>
            <li className=" flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer">
              More
            </li>
          </ul>
          <Link to="/login">
            <button className=" sm:ml-2 bg-gray-900 hover:bg-black border text-white pb-[3px] px-5 rounded-full duration-[150ms]">
              Login
            </button>
          </Link>
          <Link to="/">
            <IoHome className="sm:hidden size-6 text-gray-400 hover:text-gray-600 duration-200" />
          </Link>
          <PiDotsSixVerticalBold
            onClick={() => {
              setnavSubElemnetsState(!navSubElemnetsState);
            }}
            className=" sm:hidden size-7 text-gray-500 hover:text-black duration-300 hover:scale-105"
          />

          {navSubElemnetsState && (
            <ul
              className={`absolute text-[18px] top-[110%] border w-10/12 pl-8 bg-white space-y-2 border-b-4 pb-1 pt-2 sm:hidden gap-6`}
            >
              <li
                onMouseEnter={() => {
                  setShowProvinceMenu(!showProvinceMenu);
                }}
                onMouseLeave={() => {
                  setShowProvinceMenu(!showProvinceMenu);
                }}
                className=" pb-1 gap-4 relative flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer border-b "
              >
                Province
                <MdKeyboardArrowDown
                  className={` ${showProvinceMenu && "rotate-180"} mt-1`}
                />
                {showProvinceMenu && (
                  <div
                    className={` z-20 absolute w-[100%] left-[0px] top-[100%] border overflow-y-scroll overflow-x-hidden mb-10 bg-white custom border-b-2`}
                  >
                    {provinces.map((province, index) => (
                      <button
                        id={index}
                        className=" border-b w-full text-center px-1 pt-1 text-gray-600 hover:bg-gray-50 hover:text-black   border-gray-100"
                      >
                        {province}
                      </button>
                    ))}
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => {
                  setShowDistrictMenu(!showDistrictMenu);
                }}
                onMouseLeave={() => {
                  setShowDistrictMenu(!showDistrictMenu);
                }}
                className=" pb-1 gap-4 relative flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer border-b"
              >
                District
                <MdKeyboardArrowDown
                  className={` ${showDistrictMenu && "rotate-180"} mt-1`}
                />
                {showDistrictMenu && (
                  <div
                    className={` absolute w-[100%] left-[0px] top-[100%] h-52 border overflow-y-scroll overflow-x-hidden mb-5 bg-white custom border-b-2`}
                  >
                    {districts.map((district, index) => (
                      <button
                        id={index}
                        className=" border-b w-full text-center px-1 pt-1 text-gray-600 hover:bg-gray-50 hover:text-black   border-gray-100"
                      >
                        {district}
                      </button>
                    ))}
                  </div>
                )}
              </li>
              <Link to="/review">
                <li className=" pb-1 flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer border-b">
                  Review
                </li>
              </Link>
              <li className=" pb-1 flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer">
                More
              </li>
            </ul>
          )}
        </div>
        <div className="absolute top-[100%] left-[0%] -z-10 w-full">
          <div className="sm:w-11/12 mx-auto">
            <ScrollLink
              to="searchBar"
              smooth={true}
              duration={800}
              spy={true}
              offset={-110}
            >
              <MiniSearchBtn />
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}
