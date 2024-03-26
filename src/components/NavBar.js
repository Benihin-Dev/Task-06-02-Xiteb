import React, { useState } from "react";
import logo from "../images/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiDotsSixVerticalBold } from "react-icons/pi";

export default function NavBar() {
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
  return (
    <div className=" fixed w-full z-20 mt-[-40px] bg-[#fff5]">
      <div className=" w-11/12 sm:w-10/12 lg:w-9/12 mx-auto flex items-end justify-between mt-0 pb-2 pt-1 bg-[#ffffffbb]">
        <img className=" h-12" src={logo} alt="" />
        <div className=" flex gap-5 items-center w-9/12 justify-end relative">
          <ul className={` hidden sm:flex gap-6`}>
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
                  className={` absolute w-[170%] left-[-10px] top-[100%] h-36 border overflow-y-scroll overflow-x-hidden mb-10 bg-white custom border-b-2`}
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
                  className={` absolute w-[180%] left-[-10px] top-[100%] h-36 border overflow-y-scroll overflow-x-hidden mb-5 bg-white custom border-b-2`}
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

            <li className=" flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer">
              Review
            </li>
            <li className=" flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer">
              More
            </li>
          </ul>
          <button className=" sm:ml-2 bg-gray-900 hover:bg-black border text-white pb-[3px] px-5 rounded-full duration-[150ms]">
            Login
          </button>
          <PiDotsSixVerticalBold
            onClick={() => {
              setnavSubElemnetsState(!navSubElemnetsState);
            }}
            className=" sm:hidden size-7 text-gray-500 hover:text-black duration-300 hover:scale-105"
          />
          {navSubElemnetsState && (
            <ul
              className={`absolute top-[110%] border w-3/5 pl-5 bg-white space-y-2 border-b-4 pb-1 pt-2 sm:hidden gap-6`}
            >
              <li
                onMouseEnter={() => {
                  setShowProvinceMenu(!showProvinceMenu);
                }}
                onMouseLeave={() => {
                  setShowProvinceMenu(!showProvinceMenu);
                }}
                className=" gap-4 relative flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer border-b "
              >
                Province
                <MdKeyboardArrowDown
                  className={` ${showProvinceMenu && "rotate-180"} mt-1`}
                />
                {showProvinceMenu && (
                  <div
                    className={` z-20 absolute w-[100%] left-[0px] top-[100%] h-36 border overflow-y-scroll overflow-x-hidden mb-10 bg-white custom border-b-2`}
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
                className=" gap-4 relative flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer border-b"
              >
                District
                <MdKeyboardArrowDown
                  className={` ${showDistrictMenu && "rotate-180"} mt-1`}
                />
                {showDistrictMenu && (
                  <div
                    className={` absolute w-[100%] left-[0px] top-[100%] h-36 border overflow-y-scroll overflow-x-hidden mb-5 bg-white custom border-b-2`}
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
              <li className=" flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer border-b">
                Review
              </li>
              <li className=" flex items-center text-gray-500 hover:text-black duration-200 cursor-pointer">
                More
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
