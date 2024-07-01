import React from "react";
import SliderForProducts from "./SliderForProducts";

export default function Testimonial() {
  return (
    <div className=" w-full relative  py-16  z-20 ">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto sm:flex p    ">
        <div className=" sm:w-1/4 flex items-center justify-end ">
          <div className=" space-y-5  text-white ">
            <p className=" text-4xl cursor-default ">
              Smart automotive for smart peoples
            </p>
            <p className=" leading-4 cursor-default text-xs">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcoriscing elit. Ut elit tellus, luctus nec
              ullamcor per mattis, pulvinar dapibus leo.
            </p>
            <button className="  px-4 py-1 text-white bg-[#ffad33] hover:bg-[#1ea2d5] duration-200">
              All Testimonials
            </button>
          </div>
        </div>
        <div className="sm:w-3/4 ">
          <SliderForProducts />
        </div>
      </div>
    </div>
  );
}
