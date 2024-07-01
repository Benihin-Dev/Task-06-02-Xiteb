import React from "react";
import logoImg from "./images/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { MdCall } from "react-icons/md";

export default function NavBar() {
  return (
    <div className=" w-full relative overflow-hidden z-20  bg-[#ffffff] ">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12  mx-auto flex justify-between items-center pt-3 pb-2  gap-2 ">
        <div>
          <img
            src={logoImg}
            alt=""
            className=" h-10 cursor-pointer object-contain"
          />
        </div>
        <div className=" font-rajdhani hidden sm:flex text-xs sm:w-6/12 border border-gray-200 bg-[#ffffffcd] hover:bg-white   rounded-sm overflow-hidden   items-center duration-200 hover:shadow-sm shadow">
          <input
            type="text"
            placeholder="Search by Model Name, Part Name and Serial Number.."
            className=" bg-transparent focus:bg-white outline-none pt-2 pb-1 text-sm px-4 w-full"
          />
          <div className="  px-2 border-gray-300  border-l">
            <CiSearch className=" size-6 text-gray-600  hover:text-[#0096cf] cursor-pointer" />
          </div>{" "}
        </div>
        <div className=" text-gray-300 flex items-center text-sm gap-3">
          <BsCart4 className="  size-6 hover:text-[#0096cf]  duration-200 cursor-pointer" />
          <button className=" px-4 py-1 border text-white bg-[#ffad33] hover:bg-[#0096cf] duration-200">
            Login
          </button>
          <button className=" px-3 py-1 border border-[#ffad33] text-[#0096cf]  hover:text-white duration-200 hover:border-[#0096cf] hover:bg-[#0096cf] ">
            Signup
          </button>
        </div>
      </div>
      <div className=" w-full border-b pb-2">
        <div className=" sm:hidden flex text-xs mx-auto w-11/12 border border-gray-200 bg-[#ffffffcd] hover:bg-white   rounded-sm overflow-hidden   items-center duration-200 hover:shadow-sm shadow">
          <input
            type="text"
            placeholder="What are you looking for.."
            className=" bg-transparent focus:bg-white outline-none pt-2 pb-1 text-sm px-4 w-full"
          />
          <div className="  px-2 border-gray-300  border-l">
            <CiSearch className=" size-6 text-gray-600  hover:text-[#0096cf] cursor-pointer" />
          </div>{" "}
        </div>
      </div>
      <div className=" w-full px-5 sm:px-0 sm:w-11/12  mx-auto flex justify-between items-center pt-3 pb-2  gap-2 ">
        <ul className=" flex gap-5 text-gray-400 text-sm">
          <li className=" cursor-pointer hover:text-[#0096cf] duration-200">
            Home
          </li>
          <li className=" cursor-pointer hover:text-[#0096cf] duration-200">
            Shop
          </li>
          <li className=" cursor-pointer hover:text-[#0096cf] duration-200">
            Contact
          </li>
          <li className=" cursor-pointer hover:text-[#0096cf] duration-200">
            Dealers
          </li>
        </ul>
        <div className=" flex items-center gap-1 ">
          <div className="border border-[#ffad33] rounded-full p-[2px]">
            <MdCall className=" text-[#ffad33] size-5" />
          </div>
          <p className=" text-xs text-gray-400 hidden sm:flex cursor-default" >
            Need a Call? <span className=" text-black pl-1 "> 0111234567</span>
          </p>
        </div>
      </div>
    </div>
  );
}
