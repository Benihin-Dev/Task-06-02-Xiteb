import React from "react";

export default function BgImage() {
  return (
    <div className=" fixed top-0 left-0 right-0 -z-20 w-full h-screen bg-black ">
      <div className=" w-full h-full relative">
        <img
          src="https://www.kingauto.com.au/src/res/img/header_img/parts/parts-2.webp"
          className=" h-full w-full object-cover"
          alt=""
        />
        <div className=" w-full h-full absolute top-0 left-0 bg-[#000000b4]"></div>
      </div>
    </div>
  );
}
