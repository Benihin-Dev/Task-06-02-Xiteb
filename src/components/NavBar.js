import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { FiHome } from "react-icons/fi";
import logoImg from "../img/logo.png";
import logoImg1 from "../img/logo1.png";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className=" w-full fixed z-10 bg-[#c9f3ffe5]">
      <div className=" py-3 w-full px-5 sm:px-0 sm:w-11/12 md:w-10/12 mx-auto flex items-end justify-between gap-5">
        <div className=" flex items-end gap-2">
          <div
            onClick={() => {
              navigate("/");
            }}
            className=" flex items-end relative"
          >
            <img src={logoImg1} className=" h-5 sm:h-8" alt="" />{" "}
            <img src={logoImg} className=" h-4 sm:h-5" alt="" />{" "}
          </div>
          <FiHome
            onClick={() => {
              navigate("/");
            }}
            className="size-5 hover:text-black duration-200 text-indigo-300"
          />
        </div>

        <div className=" flex items-center justify-center px-2 py-2 rounded-full  bg-[#ffffffe9] border border-[#d1bcfe] hover:border-[#ad8bf6] duration-200">
          <SlMagnifier className=" cursor-pointer text-[#db44448b] hover:text-[#ac4848]" />
          <input
            className=" sm:w-60 lg:w-80 mr-2 w-full sm:text-sm text-xs outline-none bg-transparent border-none px-2"
            type="text"
            placeholder="what are you looking for?.."
          />
        </div>
      </div>
    </div>
  );
}
