import React from "react";
import phoneImg from "../images/phonePic.png";
import messageImg from "../images/messageLogo.png";
import orangeRingImg from "../images/orangeRing.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Intro() {
  return (
    <div className=" text-white w-full sm:flex mt-10 sm:mt-16">
      <div className="slideFromLeft sm:w-6/12 pt-5">
        <h1 className=" text-4xl sm:text-[4vw] sm:leading-[4vw]  font-bold">
          Smart banking for freelancers
        </h1>
        <p className="mt-5 sm:mt-[3vw] sm:text-sm md:text-lg sm:leading-4 md:leading-5 sm:pr-10 text-justify">
          Coinwave is a revolutionary mobile app built to help you manage your
          business easily and save your money
        </p>
        <div className=" w-fit border flex items-center gap-2 rounded-xl text-[#12183d] bg-white hover:bg-[#12183d] hover:text-white px-6 py-[6px] border-[#ff6262] duration-200 mt-8">
          <button className="  ">Register now</button>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="slideFromRight relative sm:w-6/12 flex justify-end items-center">
        <img
          src={phoneImg}
          className=" w-[60vw] sm:w-[25vw] rotate-[10deg] "
          alt=""
        />
        <img
          className="absolute w-[25%] sm:w-[11vw] bottom-2 right-[9%]"
          src={messageImg}
          alt=""
        />
        <img
          className=" absolute w-[30%] sm:w-[12vw] bottom-[20%] left-[2%] blur-[1px]"
          src={orangeRingImg}
          alt=""
        />
      </div>
    </div>
  );
}
