import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdArrowForwardIos } from "react-icons/md";
import mapImg from "../images/frontMap.png";
import sigiriyaImg from "../images/SIHIRIYA.jpg";
import elleImg from "../images/ELLE.jpg";
import dutchFortImg from "../images/dutchFort.png";
import mirissaImg from "../images/Mirissa.jpg";
import yalaParkImg from "../images/Yala.jpg";
import kandyImg from "../images/Kandy.jpg";
import jaffnaImg from "../images/Jaffna.jpg";
import jaffnaBeachImg from "../images/jaffna-beachesOG.jpg";
import nallurImg from "../images/nallur-temple.jpg (2).jpg";
import nuwaraImg from "../images/nuwara-eliya-highlights.jpg";
import polanaruwaImg from "../images/polannaruwa.jpg";
import ruwanImg from "../images/ruwan.png";
import trincoImg from "../images/tringo.jpg";
import top1Img from "../images/top1.jpg";
import top2Img from "../images/top2.jpg";
import beachImg from "../images/tropical-beach.jpg";
import tour1 from "../images/tour1.png";

export default function IntroPage() {
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
  const [popularity, setPopularity] = useState([
    { name: "Sigiriya", imgage: sigiriyaImg },
    { name: "Ella", imgage: elleImg },
    { name: "Dutch Fort", imgage: dutchFortImg },
    { name: "Mirissa", imgage: mirissaImg },
    { name: "Yala Park", imgage: yalaParkImg },
    { name: "Kandy", imgage: kandyImg },
    { name: "Jaffna", imgage: jaffnaImg },
    { name: "Nuwara", imgage: nuwaraImg },
    { name: "Trinco", imgage: trincoImg },
    { name: "Nallur Kovil", imgage: nallurImg },
    { name: "Puththalam", imgage: top1Img },
    { name: "Thalatha Maligha", imgage: top2Img },
    { name: "Pasikudah Beach", imgage: beachImg },
  ]);
  const [featuredDestinations, setFeaturedDestinations] = useState([
    {
      name: "Nuwara-Eliya",
      imgage: nuwaraImg,
    },
    {
      name: "Kandy",
      imgage: kandyImg,
    },
    {
      name: "Galle",
      imgage: dutchFortImg,
    },
    {
      name: "Trincomalee",
      imgage: trincoImg,
    },
    {
      name: "Polonnaruwa",
      imgage: polanaruwaImg,
    },
    {
      name: "Jaffna",
      imgage: jaffnaBeachImg,
    },
    {
      name: "Anurathapura",
      imgage: ruwanImg,
    },
  ]);
  const [xAxisPositionForPopularity, setXAxisPositionForPopularity] =
    useState(0);
  var position = "translate-x-[" + xAxisPositionForPopularity + "px]";
  return (
    <div className=" w-11/12 sm:w-10/12 lg:w-8/12 mx-auto mt-10 pt-10 ">
      <div className=" w-full sm:w-10/12 md:w-8/12 mx-auto border  rounded-full shadow hover:shadow-md duration-300 flex items-center px-2  py-[7px]">
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
      <div className=" w-full sm:w-10/12 md:w-8/12 mx-auto mt-2 sm:px-5 text-sm">
        {searchPlaces.map((place, index) => (
          <button
            id={index}
            className=" border hover:border-gray-400 px-2 m-[3px] shadow hover:shadow-md pb-[2px]"
          >
            {place}
          </button>
        ))}
      </div>
      <div className=" w-full sm:w-10/12 md:w-8/12 mx-auto mt-10 px-2 sm:px-5 text-sm border h-44 rounded-2xl bg-[#7bad90] relative overflow-hidden">
        <p className=" absolute bottom-8 text-white leading-4">
          Search with <br /> Embed Location Map
        </p>
        <img
          onClick={() => {
            console.log("Clicked");
          }}
          src={mapImg}
          alt=""
          className=" absolute top-0 -right-2 sm:right-10 md:right-20 h-full"
        />
      </div>
      <div className="mt-12 relative ">
        <h1 className=" font-bold sm:px-5 ">Popularity Attractions</h1>
        <div className="relative overflow-x-scroll overflow-y-hidden custom h-52">
          <div className={` absolute top-2 gap-4 flex px-4 ${position}`}>
            {popularity.map((place, index) => (
              <div id={index} className=" w-52">
                <img
                  src={place.imgage}
                  alt=""
                  className="h-36 rounded-md overflow-hidden shadow-lg hover:scale-[1.02]  duration-200 hover:shadow-[#b2b3b6]"
                />
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
      <div className=" w-full mx-auto sm:flex items-end justify-between mt-10">
        <div className=" pr-5 sm:pl-3 md:pr-20">
          <p className=" text-3xl pb-1">Plan A Trip</p>
          <p className=" text-sm md:text-base leading-4 md:leading-5 text-gray-600">
            Discover the enchanting landscapes and cultural richness of Sri
            Lanka on a mesmerizing trip
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
      <div className="mt-20 relative ">
        <h1 className=" font-bold sm:px-5">
          Featured Destinations in SriLanka
        </h1>
        <div className="relative overflow-x-scroll overflow-y-hidden custom h-52">
          <div className={` absolute top-2 gap-4 flex px-4`}>
            {featuredDestinations.map((place, index) => (
              <div id={index} className=" w-52">
                <img
                  src={place.imgage}
                  alt=""
                  className="h-36 rounded-md overflow-hidden shadow-lg hover:scale-[1.02]  duration-200 hover:shadow-[#aaabac]"
                />
                <p className=" z-20 pt-1 font-[400] ">{place.name}</p>
              </div>
            ))}
          </div>
        </div>
        <MdArrowForwardIos className="absolute bg-gray-50 border hover:bg-gray-200 hover:border-gray-600 hover:scale-105 duration-300 top-[38%] right-1 p-1 rounded-full z-10 size-6" />
      </div>
    </div>
  );
}
