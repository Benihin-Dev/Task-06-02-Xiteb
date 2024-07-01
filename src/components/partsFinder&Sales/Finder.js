import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Finder() {
  const automobileBrands = [
    "Toyota",
    "Volkswagen",
    "Ford",
    "Honda",
    "BMW",
    "Mercedes-Benz",
    "General Motors ",
    "Hyundai",
    "Nissan",
    "Audi",
    "Other",
  ];
  const carClassifications = [
    "Sedan",
    "Hatchback",
    "Coupe",
    "Convertible",
    "SUV ",
    "Pickup Truck",
    "Minivan",
    "Crossover",
    "Wagon",
    "Electric Vehicle",
    "Other",
  ];
  const carColors = [
    "White",
    "Black",
    "Gray",
    "Silver",
    "Blue",
    "Red",
    "Brown",
    "Green",
    "Yellow",
    "Orange",
    "Other",
  ];
  const [automobileBrandsListState, setAutomobileBrandsListState] =
    useState(false);
  const [carClassificationsListState, setCarClassificationsListState] =
    useState(false);
  const [carColorsListState, setCarColorsListState] = useState(false);

  const [selectedAutoBrand, setSelectedAutoBrand] = useState(
    automobileBrands[0]
  );
  const [selectedCarClass, setSelectedCarClass] = useState(
    carClassifications[0]
  );
  const [selectedCarColor, setSelectedCarColor] = useState(carColors[0]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className=" relative w-full">
      <div className=" py-8 bg-[#ffffffec] ">
        <div className=" w-full h-full px-5 sm:px-0 mx-auto  sm:w-11/12 md:flex items-center gap-5 lg:gap-8 space-y-3 md:space-y-0">
          <div
            ref={ref}
            className={` animated-component2Right  ${
              inView ? "is-visible" : ""
            } className=" w-full px-2 py-3 md:w-1/5 border text-center text-white bg-[#ffad33] leading-5 cursor-default`}
          >
            <p className=" ">Find Parts for Your Vehicle</p>
          </div>
          <div
            onClick={() => {
              setAutomobileBrandsListState(!automobileBrandsListState);
            }}
            className=" rounded-sm  relative w-full md:w-1/5 border shadow"
          >
            <div className=" bg-white hover:bg-gray-50 border-gray-800 cursor-pointer w-full px-3 py-1  flex items-end justify-between text-gray-400 text-[16px] ">
              <p className=" ">{selectedAutoBrand}</p>
              <MdOutlineArrowDropDown className=" text-gray-500 size-5" />
            </div>
            {automobileBrandsListState && (
              <div className=" absolute bg-white z-30 shadow top-[103%] left-0 right-0 h-40 overflow-y-scroll customScrollBar  border-l border-r border-b text-gray-400 ">
                {automobileBrands.map((item, index) => (
                  <p
                    onClick={() => {
                      setSelectedAutoBrand(automobileBrands[index]);
                    }}
                    key={index}
                    className=" cursor-pointer w-full py-1 px-3 bg-white hover:bg-gray-50 hover:text-gray-600 "
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setCarClassificationsListState(!carClassificationsListState);
            }}
            className=" rounded-sm  relative w-full md:w-1/5 border shadow"
          >
            <div className=" bg-white hover:bg-gray-50 cursor-pointer w-full px-3 py-1  flex items-end justify-between text-gray-400 text-[16px] ">
              <p className=" ">{selectedCarClass}</p>
              <MdOutlineArrowDropDown className=" text-gray-500 size-5" />
            </div>
            {carClassificationsListState && (
              <div className=" absolute bg-white  z-30 shadow top-[103%] left-0 right-0 h-40 overflow-y-scroll customScrollBar  border-l border-r border-b text-gray-400 ">
                {carClassifications.map((item, index) => (
                  <p
                    onClick={() => {
                      setSelectedCarClass(carClassifications[index]);
                    }}
                    key={index}
                    className=" cursor-pointer w-full py-1 px-3 bg-white hover:bg-gray-50 hover:text-gray-600 "
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setCarColorsListState(!carColorsListState);
            }}
            className=" rounded-sm  relative w-full md:w-1/5 border shadow"
          >
            <div className=" bg-white hover:bg-gray-50 cursor-pointer w-full px-3 py-1  flex items-end justify-between text-gray-400 text-[16px] ">
              <p className=" ">{selectedCarColor}</p>
              <MdOutlineArrowDropDown className=" text-gray-500 size-5" />
            </div>
            {carColorsListState && (
              <div className=" absolute bg-white z-30 shadow top-[103%] left-0 right-0 h-40 overflow-y-scroll customScrollBar  border-l border-r border-b text-gray-400 ">
                {carColors.map((item, index) => (
                  <p
                    onClick={() => {
                      setSelectedCarColor(carColors[index]);
                    }}
                    key={index}
                    className=" cursor-pointer w-full py-1 px-3 bg-white hover:bg-gray-50 hover:text-gray-600 "
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className=" cursor-pointer w-full px-3 py-2 md:w-1/5 bg-[#ffad33]   duration-200 text-white text-center h-full border">
            {" "}
            <p>Search</p>
          </div>
        </div>
      </div>

      <div className=" absolute w-full h-full top-0 left-0 bg-red-400 -z-10  overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/af/00/52/af0052ab4c5fcd6e2192549163b2af5d.jpg"
          alt=""
          className="-z-20 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
