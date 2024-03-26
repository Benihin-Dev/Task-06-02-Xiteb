import React from "react";
import logoImg from "../images/logo.png";

export default function Loader() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="">
        <img src={logoImg} alt="" className=" w-[30vw] sm:w-[15vw]" />
        <div className="mx-auto flex justify-around items-center h-5">
          <div className="  rounded-full loadingDot"></div>
          <div className="  rounded-full loadingDot"></div>
          <div className="  rounded-full loadingDot"></div>
          <div className="  rounded-full loadingDot"></div>
          <div className="  rounded-full loadingDot"></div>
          <div className="  rounded-full loadingDot"></div>
          <div className="  rounded-full loadingDot"></div>
          <div className="  rounded-full loadingDot"></div>
        </div>
      </div>
    </div>
  );
}
