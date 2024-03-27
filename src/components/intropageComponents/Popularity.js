import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { MdArrowForwardIos } from "react-icons/md";
import { useData } from "../MainContextProvider";
import { Link } from "react-router-dom";

export default function Popularity() {
  const { popularity, setSelectedPalceIndex } = useData();
  const [xAxisPositionForPopularity, setXAxisPositionForPopularity] =
    useState(0);
  var position = "translate-x-[" + xAxisPositionForPopularity + "px]";
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } mt-12 relative `}
    >
      <h1 className=" font-bold sm:px-5 ">Popularity Attractions</h1>
      <div className="relative overflow-x-scroll overflow-y-hidden custom h-52">
        <div className={` absolute top-2 gap-4 flex px-4 ${position}`}>
          {popularity.map((place, index) => (
            <div key={index} className=" w-52">
              <Link to="/touristPlaceComponent">
                <img
                  onClick={() => {
                    setSelectedPalceIndex(index);
                  }}
                  src={place.imgage}
                  alt=""
                  className="h-36 cursor-pointer rounded-md overflow-hidden shadow-lg hover:scale-[1.02]  duration-200 hover:shadow-[#b2b3b6]"
                />
              </Link>
              <p className=" z-20 pt-1 font-[400]">{place.name}</p>
            </div>
          ))}
        </div>
      </div>
      <MdArrowForwardIos
        onClick={() => {
          setXAxisPositionForPopularity(xAxisPositionForPopularity - 8); // Adjust the value as needed
        }}
        className="absolute bg-gray-50 border hover:bg-gray-200 hover:border-gray-600 hover:scale-105 duration-300 top-[38%] right-1 p-1 rounded-full z-10 size-6"
      />
    </div>
  );
}
