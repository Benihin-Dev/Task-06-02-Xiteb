import React from "react";
import { GoHomeFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function NavBarForSubPages() {
  const navigate = useNavigate();

  return (
    <div
      className={`top-0 fixed  left-0 right-0 w-full bg-[#ffffff] z-10 pb-2`}
    >
      <div className=" w-full sm:w-11/12 md:w-10/12 pt-5 flex items-center justify-between px-5 sm:px-0 mx-auto ">
        <div className="  ">
          <div
            onClick={() => {
              navigate("/");
            }}
            className=" cursor-pointer  w-fit text-center "
          >
            <h1 className=" text-2xl lg:text-3xl text-[#0c7f40] font-semibold">
              R-STATE
            </h1>
            <p className=" text-xs  mt-[-6px] font-medium">Real Estate</p>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/");
          }}
          className=" cursor-pointer sm:border-[#078169] text-gray-600 sm:shadow border-transparent hover:text-[#078169]  duration-200 sm:hover:bg-[#078169] sm:hover:text-white flex items-end justify-center gap-2 py-1 px-3 rounded-sm  border"
        >
          <GoHomeFill className={` size-7   sm:size-5 sm:pb-[1px]   `} />
          <p className=" hidden sm:block text-sm ">Back to Home</p>
        </div>
      </div>
    </div>
  );
}
