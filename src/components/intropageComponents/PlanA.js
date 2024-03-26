import React from "react";
import { useInView } from "react-intersection-observer";
import { useData } from "../MainContextProvider";
import { HiMagnifyingGlass } from "react-icons/hi2";
import top1Img from "../../images/top1.jpg";

export default function PlanA() {
  const { miniSearchBoxStatus, setminiSearchBoxStatus } = useData();

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  if (inView === true) {
    setminiSearchBoxStatus(true);
  }
  return (
    <div
      ref={ref}
      className={`animated-component ${inView ? "is-visible" : ""}
  w-full mx-auto sm:flex items-end justify-between mt-10`}
    >
      <div className=" pr-5 sm:pl-3 md:pr-20">
        <p className=" text-3xl pb-1">Plan A Trip</p>
        <p className=" text-sm md:text-base leading-4 md:leading-5 text-gray-600">
          Discover the enchanting landscapes and cultural richness of Sri Lanka
          on a mesmerizing trip
        </p>
        <div className=" flex w-full items-center gap-2 mt-5 px-2 rounded-full hover:shadow-md duration-300 py-1 border shadow-sm focus:border-gray-500">
          <input
            type="text"
            className="pl-2 w-full outline-none text-sm"
            placeholder="Find Related Places"
            name=""
            id=""
          />
          <HiMagnifyingGlass className=" size-5 hover:scale-105" />
        </div>
      </div>
      <img
        src={top1Img}
        alt=""
        className=" w-full mt-5 sm:mt-0 sm:w-[40vw] shadow-md rounded-sm"
      />
    </div>
  );
}
