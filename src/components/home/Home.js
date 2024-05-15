import React from "react";
import { RxSquare } from "react-icons/rx";

export default function Home() {
  return (
    <div className=" w-full relative   overflow-hidden">
      <img
        src="https://snapfolioprofilepics.s3.amazonaws.com/2d8723f3b9f85528a6dff1b76a6cf081.png"
        className=" pt-10 lg:pt-0 w-screen bg-[#d8dde1]"
        alt=""
      />
      <div className=" w-full py-7 bg-[#078169] text-white">
        <div className=" w-10/12 mx-auto sm:flex  justify-between">
          <p className=" cursor-default text-xs sm:text-sm md:text-base leading-4 pr-4">
            Don't See The City You Were Looking For? Help Us Out By Suggesting!
          </p>
          <div className=" cursor-pointer hover:bg-white duration-200 hover:text-black py-1 px-3 border-white border mt-2 sm:mt-0 rounded flex items-center justify-center gap-2">
            <RxSquare className=" size-3" />
            <p className=" text-sm sm:text-base"> Suggest City</p>
          </div>
        </div>
      </div>
      <div className=" absolute top-[25%] sm:top-[34%] left-0 w-full flex items-center justify-center lg:pl-32">
        <div className=" text-white w-fit  px-5 items-center">
          <p className=" w-full text-center text-sm sm:text-lg cursor-default ">
            All Type Properties Are Published Here
          </p>
          <p className=" w-full text-center cursor-default text-2xl md:text-5xl font-prata sm:pt-3">
            Find The Best Place To Be
          </p>
          <div className=" w-full flex items-center justify-center">
            <button className=" bg-[#078169] hover:bg-[#246561] shadow text-sm px-4 py-2 rounded sm:mt-3">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
