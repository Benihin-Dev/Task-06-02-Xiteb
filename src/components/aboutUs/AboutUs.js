import React from "react";
import { IoCarSport } from "react-icons/io5";
import { GiSteeringWheel } from "react-icons/gi";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div className=" w-full py-10 bg-white font-rajdhani">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto md:grid  grid-cols-2 gap-5 lg:gap-16">
        <div className=" hidden sm:block w-full border relative">
          <img
            src="https://fullkit.moxcreative.com/otoplaza/wp-content/uploads/sites/28/2023/08/new-metal-auto-parts-on-grey-background-e1693454773455.jpg"
            alt=""
            className=" w-full h-full object-cover"
          />
          <div
            ref={ref}
            className={` animated-component2Left  ${
              inView ? "is-visible" : ""
            } absolute w-1/2 h-1/3 z-10 -right-14 bottom-0`}
          >
            <img
              src="https://fullkit.moxcreative.com/otoplaza/wp-content/uploads/sites/28/2023/08/Cart-4.png"
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" w-full">
          <p className="   text-sm text-gray-600 pt-10 pb-5">ABOUT US</p>
          <p className=" w-full text-5xl font-bold text-[#1ea2d5]">
            The Essence of Engineering, Fueled by Passion
          </p>
          <p className="  text-gray-700 leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattisconsectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div
            ref={ref}
            className={` animated-component2Left  ${
              inView ? "is-visible" : ""
            } space-y-5 mt-3`}
          >
            <div className=" flex bg-[#ffad33] h-fit ">
              <div className=" size-20 sm:size-16 px-3 my-auto flex items-center justify-center">
                <IoCarSport className=" w-full h-full " />
              </div>
              <div className=" w-full pl-4 bg-white">
                <p className=" text-lg font-semibold ">Auto Part Store</p>
                <p className="  text-gray-700 leading-5 ">
                  Sit porta elementum laoreet phasellus duis nostra augue.
                  Dictumst in porta inceptos maximus convallis
                </p>
              </div>
            </div>
            <div className=" flex bg-[#ffad33] h-fit ">
              <div className=" size-20 sm:size-16 px-3 my-auto flex items-center justify-center">
                <GiSteeringWheel className=" w-full h-full " />
              </div>
              <div className=" w-full pl-4 bg-white">
                <p className=" text-lg font-semibold ">Auto Part Store</p>
                <p className="  text-gray-700 leading-5">
                  Sit porta elementum laoreet phasellus duis nostra augue.
                  Dictumst in porta inceptos maximus convallis
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={ref}
          className={` animated-component2Left  ${
            inView ? "is-visible" : ""
          } sm:hidden mt-5 w-full border relative`}
        >
          <img
            src="https://fullkit.moxcreative.com/otoplaza/wp-content/uploads/sites/28/2023/08/new-metal-auto-parts-on-grey-background-e1693454773455.jpg"
            alt=""
            className=" w-full h-full object-cover"
          />
          <div className=" absolute w-1/2  -right-14 bottom-0">
            <img
              src="https://fullkit.moxcreative.com/otoplaza/wp-content/uploads/sites/28/2023/08/Cart-4.png"
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
