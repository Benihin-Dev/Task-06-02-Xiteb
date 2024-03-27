import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useData } from "../MainContextProvider";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchBox() {
  const { miniSearchBoxStatus, setminiSearchBoxStatus } = useData();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  if (inView === true) {
    setminiSearchBoxStatus(false);
  }
  const [searchPlaces, setSearchPlaces] = useState([
    "Historical Places",
    "Natural Wonders",
    "City Destinations",
    "Theme Parks",
    "Cultural and Heritage Sites",
    "Beaches and Resorts",
    "Adventure Tourism",
    "Wildlife and Nature Reserves",
    "Culinary Tourism",
    "Waterfalls",
    "Religious and Spiritual Sites",
  ]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      const element = document.querySelector(".searchBoxComponent");

      element.classList.remove("slideFromLeft");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <>
      <div
        ref={ref}
        className=" searchBoxComponent slideFromLeft w-full sm:w-10/12 md:w-8/12 mx-auto border  rounded-full shadow hover:shadow-md duration-300 flex items-center px-2  py-[7px]"
      >
        <HiMagnifyingGlass className=" ml-2 size-6 text-gray-600" />
        <input
          className=" px-2 outline-none w-full"
          type="text"
          name="place"
          id="place"
          placeholder=" Search Place"
        />
        <button className=" rounded-full px-5 text-white bg-[#478862] hover:bg-[#376c4d] py-[2px] z-0">
          Search
        </button>
      </div>
      <div className="searchBoxComponent slideFromLeft w-full sm:w-10/12 md:w-8/12 mx-auto mt-2 sm:px-5 sm:text-sm text-[16px]">
        {searchPlaces.map((place, index) => (
          <button
            key={index}
            className=" border hover:border-gray-400 px-2 m-[3px] shadow hover:shadow-md pb-[2px]"
          >
            {place}
          </button>
        ))}
      </div>
    </>
  );
}
