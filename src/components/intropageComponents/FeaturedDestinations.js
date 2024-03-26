import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { MdArrowForwardIos } from "react-icons/md";
import { useData } from "../MainContextProvider";
import { Link } from "react-router-dom";

export default function FeaturedDestinations() {
  const { featuredDestinations, setSelectedDistrictIndex } = useData();

  const [xAxisPositionForPopularity, setXAxisPositionForPopularity] =
    useState(0);
  var position = "translate-x-[" + xAxisPositionForPopularity + "px]";
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`animated-component ${inView ? "is-visible" : ""}
     mt-20 relative `}
    >
      <h1 className=" font-bold sm:px-5">Featured Destinations in SriLanka</h1>
      <div className="relative overflow-x-scroll overflow-y-hidden custom h-52">
        <div className={` absolute top-2 gap-4 flex px-4`}>
          {featuredDestinations.map((place, index) => (
            <div id={index} className=" w-52">
              <Link to="/districtComponent">
                <img
                  onClick={() => {
                    setSelectedDistrictIndex(index);
                  }}
                  src={place.imgage}
                  alt=""
                  className=" cursor-pointer h-36 rounded-md overflow-hidden shadow-lg hover:scale-[1.02]  duration-200 hover:shadow-[#aaabac]"
                />
              </Link>
              <p className=" z-20 pt-1 font-[400] ">{place.name}</p>
            </div>
          ))}
        </div>
      </div>
      <MdArrowForwardIos className="absolute bg-gray-50 border hover:bg-gray-200 hover:border-gray-600 hover:scale-105 duration-300 top-[38%] right-1 p-1 rounded-full z-10 size-6" />
    </div>
  );
}
