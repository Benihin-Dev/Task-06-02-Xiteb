import React, { useState } from "react";
import logoImg from "../images/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import { CiMedicalCross } from "react-icons/ci";

export default function Singup({ signupState, setSignupState }) {
  const [countryShow, setCountryShow] = useState(false);
  const [selectetCountryIndex, setSelectetCountryIndex] = useState(0);
  const [countries, setCountries] = useState([
    "Country",
    "Afghanistan",
    "Algeria",
    "Angola",
    "Argentina",
    "Australia",
    "Bangladesh",
    "Brazil",
    "Cameroon",
    "Canada",
    "China",
    "Colombia",
    "Côte d'Ivoire",
    "DR Congo",
    "Egypt",
    "Ethiopia",
    "France",
    "Germany",
    "Ghana",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Italy",
    "Japan",
    "Kenya",
    "Madagascar",
    "Malaysia",
    "Mexico",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Nepal",
    "Niger",
    "Nigeria",
    "North Korea",
    "Pakistan",
    "Peru",
    "Philippines",
    "Poland",
    "Russia",
    "Saudi Arabia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Taiwan",
    "Tanzania",
    "Thailand",
    "Turkey",
    "Uganda",
    "Ukraine",
    "United Kingdom",
    "United States",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Yemen",
  ]);
  return (
    <div className=" slideFromRight w-11/12 sm:w-6/12 relative mx-auto pb-10 bg-white my-10 shadow-md  border rounded-sm">
      <div className=" w-full flex items-center justify-center">
        <img src={logoImg} alt="" className=" w-[18vw] sm:w-[7vw]" />
      </div>
      <h1 className=" mt-4 w-full text-center font-semibold">
        BECOME A COINWAVE MEMBER
      </h1>
      <p className=" mt-2 text-gray-600 w-7/12 mx-auto text-center text-sm">
        Create your Member profile and got first access to the very best of
        Lorem ipsum dolor sit amet., inspiration and community_
      </p>
      <div className=" w-10/12 space-y-3 sm:w-9/12 mx-auto mt-5">
        <input
          onChange={() => {
            console.log("");
          }}
          type="text"
          className=" py-2 shadow-sm hover:shadow-md border-[#c0c8fea7] focus:border-[#6b7dec] hover:border-[#6b7dec] duration-200 outline-none border rounded-sm w-full px-4"
          name=""
          id=""
          placeholder="Email address"
        />
        <input
          onChange={() => {
            console.log("");
          }}
          type="text"
          className=" py-2 shadow-sm hover:shadow-md border-[#c0c8fea7] focus:border-[#6b7dec] hover:border-[#6b7dec] duration-200 outline-none border rounded-sm w-full px-4"
          name=""
          id=""
          placeholder="Password"
        />
        <input
          onChange={() => {
            console.log("");
          }}
          type="text"
          className=" py-2 shadow-sm hover:shadow-md border-[#c0c8fea7] focus:border-[#6b7dec] hover:border-[#6b7dec] duration-200 outline-none border rounded-sm w-full px-4"
          name=""
          id=""
          placeholder="First name"
        />
        <input
          onChange={() => {
            console.log("");
          }}
          type="text"
          className=" py-2 shadow-sm hover:shadow-md border-[#c0c8fea7] focus:border-[#6b7dec] hover:border-[#6b7dec] duration-200 outline-none border rounded-sm w-full px-4"
          name=""
          id=""
          placeholder="Last name"
        />
        <div>
          <input
            onChange={() => {
              console.log("");
            }}
            type="text"
            className=" py-2 shadow-sm hover:shadow-md border-[#c0c8fea7] focus:border-[#6b7dec] hover:border-[#6b7dec] duration-200 outline-none border rounded-sm w-full px-4"
            name=""
            id=""
            placeholder="Phone number"
          />
          <p className=" text-gray-300 text-xs mt-0">
            to recive transection results
          </p>
        </div>
        <div className=" w-full relative">
          <input
            onChange={() => {
              console.log("");
            }}
            onClick={() => {
              setCountryShow(!countryShow);
            }}
            type="text"
            className=" py-2 shadow-sm hover:shadow-md border-[#c0c8fea7] focus:border-[#6b7dec] hover:border-[#6b7dec] duration-200 outline-none border rounded-sm w-full px-4"
            name=""
            id=""
            placeholder="Country"
            value={countries[selectetCountryIndex]}
          />
          <MdKeyboardArrowDown
            className={` ${
              countryShow === true ? "rotate-180" : ""
            } absolute top-[30%] right-[4%]`}
          />
          {countryShow && (
            <div className=" absolute top-[100%] h-52 bg-gray-50 w-full overflow-x-hidden overflow-y-scroll">
              {countries.map((country, index) => (
                <p
                  onClick={() => {
                    setSelectetCountryIndex(index);
                  }}
                  key={index}
                  className=" border-t py-2 hover:bg-gray-100 text-center w-full"
                >
                  {country}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className=" w-full flex gap-5">
          <input
            onChange={() => {
              console.log("");
            }}
            type="text"
            className=" py-2 shadow-sm hover:shadow-md border-[#c0c8fea7] focus:border-[#6b7dec] hover:border-[#6b7dec] duration-200 outline-none border rounded-sm w-full px-4"
            name=""
            id=""
            value="Male"
          />
          <input
            onChange={() => {
              console.log("");
            }}
            type="text"
            className=" py-2 shadow-sm hover:shadow-md border-[#c0c8fea7] focus:border-[#6b7dec] hover:border-[#6b7dec] duration-200 outline-none border rounded-sm w-full px-4"
            name=""
            id=""
            value="Female"
          />
        </div>
        <div className=" w-full flex gap-3 items-start justify-center ">
          <FaCheckSquare className=" size-6 text-gray-500" />
          <p className=" text-gray-700 text-sm">
            Sign up for emails to get updates trom Nike on products, offers, and
            your Member benefits
          </p>
        </div>
        <div className=" w-10/12 mx-auto mt-5 flex gap-3 items-start justify-center ">
          <p className=" text-center  text-gray-400 leading-4 text-sm">
            By creating an account, you agree to Nike'S E-duacy—E.QljCY and
            Terms of contitions
          </p>
        </div>
        <button className=" w-full border py-2 shadow-sm hover:shadow-md rounded text-white bg-[#4d97e9] hover:bg-[#ae43f5] duration-200">
          Join us
        </button>
        <div className=" flex  items-center justify-center w-full">
          <p className=" text-center text-sm text-gray-600">
            Already a member?{" "}
            <span className=" text-black font-semibold underline cursor-pointer">
              Sign in
            </span>
          </p>
        </div>
      </div>
      <CiMedicalCross
        onClick={() => {
          setSignupState(false);
        }}
        className=" absolute top-3 right-3 size-6 hover:text-red-500 rotate-45"
      />
    </div>
  );
}
