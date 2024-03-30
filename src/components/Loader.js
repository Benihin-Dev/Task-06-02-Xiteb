import React from "react";
import logoImg from "../images/logo.png";

export default function Loader() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="">
        <img src={logoImg} alt="" className=" w-[30vw] sm:w-[15vw]" />
        <div className="mx-auto w-[100%] relative  ">
          <div className="loader mt-5 rounded-2xl h-1"></div>
        </div>
      </div>
    </div>
  );
}
