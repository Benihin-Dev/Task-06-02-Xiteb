import React from "react";
import BgImg from "../images/BgImg.png";
import BgImgforPhone from "../images/BgImgPhone.png";

export default function BgImage() {
  return (
    <div className=" absolute top-0 left-0 -z-50 w-full blur-[4px]">
      <img src={BgImg} className=" w-full hidden sm:block " alt="" />
      <img src={BgImgforPhone} className="w-[110%] sm:hidden" alt="" />
    </div>
  );
}
