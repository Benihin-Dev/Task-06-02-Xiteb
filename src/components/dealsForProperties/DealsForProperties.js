import React from "react";
import img from "../../images/Image_7-300x197.jpg";
import { useInView } from "react-intersection-observer";

export default function DealsForProperties() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } w-11/12 sm:w-10/12 pt-10 pb-20 mx-auto  `}
    >
      <p className=" font-prata w-full text-center text-2xl cursor-default">
        Special Deal On Properties
      </p>
      <p className=" cursor-default text-sm text-gray-400 pt-1 text-center w-full">
        Properties are selected for discount. Choose any property from Deals.
      </p>
      <div className=" sm:flex items-end justify-between mt-10 sm:mt-16">
        <div className=" sm:hidden block  w-full ">
          <img src={img} className=" w-full rounded-md " alt="" />
        </div>
        <div className=" sm:w-5/12 mt-10 sm:mt-0 ">
          <button className="cursor-default w-fit py-1 px-2 rounded text-white text-[10px] bg-[#078169]">
            {" "}
            30% OFF
          </button>
          <p className="cursor-default font-prata text-lg mt-1">
            Gorgeous Historic House For Sale
          </p>
          <p className=" text-[#078169] py-3">
            {" "}
            <span className="cursor-default text-sm line-through text-gray-400 pr-3">
              $ 6750.00
            </span>
            $ 5500.00
          </p>
          <p className="cursor-default text-gray-400 text-justify text-sm">
            Just steps away from QM2 express bus to Manhattan and locals buses;
            only minutes from the LIRR. Walkings distances to Bay Terrace
            Shopping Centers, Baybridge Common Shopping Center, pool clubs,
            movie theaters and tennis courts.
          </p>
          <button className=" bg-[#078169] hover:bg-[#246659] duration-200 text-white py-2 px-4 rounded mt-3 ">
            Order now
          </button>
        </div>
        <div className=" hidden sm:block sm:w-1/12 "></div>
        <div className=" hidden sm:block sm:w-6/12 ">
          <img src={img} className=" w-full rounded-md " alt="" />
        </div>
      </div>
    </div>
  );
}
