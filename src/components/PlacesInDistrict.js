import React, { useEffect } from "react";
import { useData } from "./MainContextProvider";
import { TiStarFullOutline } from "react-icons/ti";

export default function PlacesInDistrict() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      const element = document.querySelector(".photoComponent");
      const element1 = document.querySelector(".textComponent");
      const element2 = document.querySelector(".textComponent1");

      element.classList.remove("slideFromLeft");
      element1.classList.remove("slideFromRight");
      element2.classList.remove("slideFromRight");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  const { featuredDestinations, selectedDistrictIndex } = useData();
  return (
    <div className="w-11/12 sm:w-10/12 lg:pr-5 lg:w-8/12 mx-auto mt-10 pt-10 ">
      <h1 className=" font-semibold mb-2">
        Experience the charm of{" "}
        {featuredDestinations[selectedDistrictIndex].name} in just a day
      </h1>
      <div className="photoComponent slideFromLeft w-full">
        <div className=" grid grid-cols-2 gap-5">
          <div className=" w-full relative">
            <img
              src={featuredDestinations[selectedDistrictIndex].imgage}
              alt=""
              className=" rounded-md shadow hover:shadow-md shadow-gray-500 hover:shadow-gray-400 hover:scale-[1.01] duration-200 overflow-hidden"
            />
            <div className=" absolute w-full h-full bg-[#3e3e3e4b] text-gray-200 duration-200 hover:text-transparent top-0 rounded-md hover:bg-transparent">
              <p className=" hidden sm:block px-2 sm:px-4 sm:text-lg sm:leading-4 mt-5">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className=" text-xs sm:text-sm leading-4 px2 sm:px-4 mt-5">
                Lorem ipsum dolor, sit amet consecteturirfhuhf 99fwh f untur,
                laborum.
              </p>
            </div>
          </div>
          <div className=" w-full relative">
            <img
              src={featuredDestinations[selectedDistrictIndex].imgage}
              alt=""
              className=" rounded-md shadow hover:shadow-md shadow-gray-500 hover:shadow-gray-400 hover:scale-[1.01] duration-200 overflow-hidden"
            />
            <div className=" absolute w-full h-full bg-[#3e3e3e4b] text-gray-200 duration-200 hover:text-transparent top-0 rounded-md hover:bg-transparent">
              <p className=" hidden sm:block px-2 sm:px-4 sm:text-lg sm:leading-4 mt-5">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className=" text-xs sm:text-sm leading-4 px2 sm:px-4 mt-5">
                Lorem ipsum dolor, sit amet consecr, laborum.
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-3 mt-4 sm:mt-8 px-3">
          <div className=" w-full relative">
            <img
              src={featuredDestinations[selectedDistrictIndex].imgage}
              alt=""
              className=" rounded-md shadow hover:shadow-md shadow-gray-500 hover:shadow-gray-400 hover:scale-[1.01] duration-200 overflow-hidden"
            />
            <div className=" absolute w-full h-full bg-[#3e3e3e4b] text-gray-200 duration-200 hover:text-transparent top-0 rounded-md hover:bg-transparent flex items-end">
              <div className="mx-auto items-end justify-end px-5 w-full flex gap-0 py-2">
                <TiStarFullOutline className=" size-3 text-gray-400" />
                <TiStarFullOutline className=" size-3 text-gray-400" />
                <TiStarFullOutline className=" size-3 text-gray-400" />
                <TiStarFullOutline className=" size-3 text-gray-300" />
                <TiStarFullOutline className=" size-3 text-gray-300" />
              </div>
            </div>
            <p className=" absolute text-sm">
              Place of {featuredDestinations[selectedDistrictIndex].name}
            </p>
          </div>
          <div className=" w-full relative">
            <img
              src={featuredDestinations[selectedDistrictIndex].imgage}
              alt=""
              className=" rounded-md shadow hover:shadow-md shadow-gray-500 hover:shadow-gray-400 hover:scale-[1.01] duration-200 overflow-hidden"
            />
            <div className=" absolute w-full h-full bg-[#3e3e3e4b] text-gray-200 duration-200 hover:text-transparent top-0 rounded-md hover:bg-transparent flex items-end">
              <div className="mx-auto items-end justify-end px-5 w-full flex gap-0 py-2">
                <TiStarFullOutline className=" size-3 text-gray-400" />
                <TiStarFullOutline className=" size-3 text-gray-400" />
                <TiStarFullOutline className=" size-3 text-gray-400" />
                <TiStarFullOutline className=" size-3 text-gray-300" />
                <TiStarFullOutline className=" size-3 text-gray-300" />
              </div>
            </div>
            <p className=" absolute text-sm">
              Place of {featuredDestinations[selectedDistrictIndex].name}
            </p>
          </div>
          <div className=" w-full relative">
            <img
              src={featuredDestinations[selectedDistrictIndex].imgage}
              alt=""
              className=" rounded-md shadow hover:shadow-md shadow-gray-500 hover:shadow-gray-400 hover:scale-[1.01] duration-200 overflow-hidden"
            />
            <div className=" absolute w-full h-full bg-[#3e3e3e4b] text-gray-200 duration-200 hover:text-transparent top-0 rounded-md hover:bg-transparent flex items-end">
              <div className="mx-auto items-end justify-end px-5 w-full flex gap-0 py-2">
                <TiStarFullOutline className=" size-3 text-gray-400" />
                <TiStarFullOutline className=" size-3 text-gray-400" />
                <TiStarFullOutline className=" size-3 text-gray-400" />
                <TiStarFullOutline className=" size-3 text-gray-300" />
                <TiStarFullOutline className=" size-3 text-gray-300" />
              </div>
            </div>
            <p className=" absolute text-sm">
              Place of {featuredDestinations[selectedDistrictIndex].name}
            </p>
          </div>
        </div>
      </div>
      <div className="textComponent slideFromRight w-full mt-16 sm:mt-20">
        <h1 className=" w-8/12 border-b pb-2 pt-2 font-semibold">
          Beach of fun
        </h1>
        <div className="relative overflow-x-scroll overflow-y-hidden custom h-52">
          <div className={` absolute top-2 gap-4 flex px-4`}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-52">
                <img
                  src={featuredDestinations[7].imgage}
                  alt=""
                  className="h-36 cursor-pointer rounded-md overflow-hidden shadow-lg hover:scale-[1.02]  duration-200 hover:shadow-[#b2b3b6]"
                />
                <p className="z-20 pt-1 font-[400] text-sm">Beach name</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="textComponent1 slideFromRight w-full mt-5">
        <h1 className=" w-8/12 border-b pb-2 pt-2 font-semibold">Temples</h1>
        <div className="relative overflow-x-scroll overflow-y-hidden custom h-52">
          <div className={` absolute top-2 gap-4 flex px-4`}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-52">
                <img
                  src={featuredDestinations[8].imgage}
                  alt=""
                  className="h-36 cursor-pointer rounded-md overflow-hidden shadow-lg hover:scale-[1.02]  duration-200 hover:shadow-[#b2b3b6]"
                />
                <p className="z-20 pt-1 font-[400] text-sm">Temples name</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className=" w-8/12  pb-2 font-semibold">See more..</h1>
      <div className=" w-full">
        <p className=" mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p className=" text-justify text-xs text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          inventore accusamus ex mollitia corrupti facilis ad vitae culpa
          pariatur rerum suscipit quia a, repellendus accusantium tempora
          doloribus dolor harum neque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magnam inventore accusamus ex mollitia corrupti
          facilis ad vitae culpa pariatur rerum suscipit quia a, repellendus
          accusantium tempora doloribus dolor harum neque. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Magnam inventore accusamus ex
          mollitia corrupti facilis ad vitae culpa pariatur rerum suscipit quia
          a, repellendus accusantium tempora doloribus dolor harum neque.
        </p>
        <p className=" text-justify text-xs text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          inventore accusamus ex mollitore accusamus ex mollitia corrupti
          facilis ad vitae culpa pariatur rerum suscipit quia a, repellendus
          accusantium tempora doloribus dolor harum neque. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Magnam inventore accusamus ex
          mollitia corrupti facilis ad vitae culpa pariatur rerum suscipit quia
          a, repellendus accusantium tempora doloribus dolor harum neque.
        </p>
      </div>
    </div>
  );
}
