import React, { useState } from "react";
import NavBar from "../navBar/NavBar";

export default function Banner() {
  return (
    <div className=" w-full  overflow-hidden relative  ">
      <div className="  sm:absolute top-0 left-0 right-0">
        <NavBar />
      </div>
      <div className=" w-full h-full relative ">
        <img
          src="https://wallpapers.com/images/hd/1440p-cars-3v80btkp1lapszo7.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="slideFromLeft overflow-hidden absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-[#0000005e]  ">
          <div className="  w-full h-full  px-5 sm:px-0 sm:w-11/12  mx-auto  flex items-end justify-start sm:gap-5 ">
            <div className=" cursor-default text-white  pb-4 sm:pb-10 md:w-4/5  lg:w-3/5 ">
              <p className="  text-2xl sm:text-5xl lg:text-6xl leading-6 sm:leading-10 font-rajdhani font-medium pr-10 sm:pr-0">
                Find the perfect parts for your vehicle at unbeatable prices!
              </p>
              <p className=" hidden sm:flex text-sm w-4/5 pt-4 sm:pr-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                ducimus et beatae votetur adipisicing elit. Cumque ducimus et
                beatae voluptates libero saepe voluptas tenetur modi reiciendis
                nam enim
              </p>
              <p className=" sm:hidden flex text-xs pr-10 sm:pr-2 leading-4">
                Lorem ipsum dolor sit amet conselibero saepe voluptas tenetur
                modi reiciendis nam enim
              </p>
              <button className=" sm:mt-5 py-1 px-4 w-fit text-sm hover:bg-[#d7c433] bg-[#0096cf] duration-200 ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className=" cursor-default overflow-hidden absolute top-36 -right-2 w-full   justify-end hidden lg:flex    ">
          <p className=" leading-8  text-[#0096cf] font-rajdhani text-4xl w-[35vw] px-5 py-3    rounded-sm    bg-[#ffffff]">
            Upgrade your ride with top-notch vehicle parts!
          </p>
        </div>
      </div>
    </div>
  );
}
