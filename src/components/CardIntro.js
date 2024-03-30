import React from "react";
import cardCornerImg from "../images/cardCornerPic.png";
import cardCornerLogo from "../images/cartCornerLogo.png";
import visaImg from "../images/visaText.png";

export default function CardIntro() {
 
  return (
    <div
      className={` w-full bg-[#f2f6ff] relative mt-10 sm:mt-20 md:mt-40`}
    >
      <svg
        className=" w-full absolute bottom-[99%] "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f2f6ff"
          fill-opacity="1"
          d="M0,96L80,122.7C160,149,320,203,480,197.3C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className=" w-11/12 sm:w-9/12 mx-auto sm:flex text-[#1433ff] pt-12 pb-5">
        <div className=" flex justify-center h-full sm:w-6/12 md:w-5/12 sm:px-2 pb-10">
          <div>
            <h1 className=" text-4xl sm:text-[4vw] sm:leading-[4vw] font-bold">
              One card for all your payments
            </h1>
            <p className=" mt-5 sm:mt-3 md:mt-[4vw] w-4/5 sm:w-full lg:pr-16 text-sm">
              Get 3% back on everything you buy with the Draft card. Register
              today and enjoy every aspect of your business.
            </p>
          </div>
        </div>
        <div className=" hidden md:flex md:w-1/12"></div>
        <div className=" sm:w-6/12">
          <div className="relative border w-[90vw] h-[55vw] mx-auto sm:w-[33vw] sm:h-[20vw] rounded-xl bg-[#12183d] shadow-lg hover:shadow-gray-600 shadow-gray-500 hover:scale-[1.006] duration-100">
            <img
              src={cardCornerImg}
              className=" absolute top-0 right-0 w-[25vw] sm:w-[9vw]"
              alt=""
            />
            <img
              src={cardCornerLogo}
              className=" absolute top-[5%] left-[4%] w-[15vw] sm:w-[5vw]"
              alt=""
            />
            <img
              src={visaImg}
              className=" absolute bottom-[15%] right-[6%] w-[15vw] sm:w-[6vw]"
              alt=""
            />

            <p className="absolute bottom-[15%] left-[6%] text-white leading-4">
              1234 **** **** 1234 <br />
              <span className=" pl-2 text-gray-400 text-xs">
                Valid Thru: 01/26
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// bg-[#f2f6ff]
