import React, { useEffect } from "react";
import { useData } from "./MainContextProvider";
import { TiStarFullOutline } from "react-icons/ti";
import { SiSitepoint } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbPhotoPlus } from "react-icons/tb";

export default function TouristPlace() {
  const { popularity, selectedPalceIndex } = useData();
  useEffect(() => {
    const timerId = setTimeout(() => {
      const element = document.querySelector(".photoComponent");
      const element1 = document.querySelector(".textComponent");
      const element2 = document.querySelector(".textComponent1");
      const element3 = document.querySelector(".textComponent2");

      element.classList.remove("slideFromLeft");
      element1.classList.remove("slideFromRight");
      element2.classList.remove("slideFromRight");
      element3.classList.remove("slideDown");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className="w-11/12 sm:w-10/12 lg:pr-5 lg:w-8/12 mx-auto mt-10 pt-10 ">
        <div className="textComponent2 slideDown  w-full justify-between flex items-center gap-1 pb-1">
          <p className="font-semibold">{popularity[selectedPalceIndex].name}</p>

          <div className=" flex gap-1 items-center">
            <div className=" flex gap-1">
              <TiStarFullOutline className=" size-5 text-gray-500" />
              <TiStarFullOutline className=" size-5 text-gray-500" />
              <TiStarFullOutline className=" size-5 text-gray-500" />
              <TiStarFullOutline className=" size-5 text-gray-500" />
              <TiStarFullOutline className=" size-5 text-gray-300" />
            </div>
            <p>100 Review</p>
          </div>
        </div>
        <div className=" sm:flex w-full">
          <div className="photoComponent slideFromLeft sm:w-3/5">
            <img
              src={popularity[selectedPalceIndex].imgage}
              className=" rounded overflow-hidden shadow-md mt-1"
              alt=""
            />
          </div>
          <div className="textComponent slideFromRight sm:w-3/5 sm:pl-5 mt-7 sm:mt-0">
            <h1 className=" text-lg w-9/12 border-b font-semibold mb-1">
              About
            </h1>

            <p className=" text-sm text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aperiam distinctio id aspernatur ipsam vero quibusdam obcaecati
              saepe reiciendis, illo fuga nobis sed accusantium non facere
              veritatis dicta quae eos? tinctio id aspernatur ipsam vero
              quibusdam obcaecati saepe reiciendis, illo fuga nobis sed
              accusantium non facere veritatis dicta quae eos?
            </p>
            <p className=" mt-3 sm:mt-2 text-sm text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aperiam distinctio idem ipsum dolor sit amet consectetur
              adipisicing elit. At aperiam distinctio id aspernatur ipsam vero
              quibusdam obcaecati saepe reiciendis, illo fuga nobis sed
              accusantium non facere veritatis dicta quae eos?
            </p>
          </div>
        </div>
        <div className="textComponent1 slideFromRight w-full mt-10 mb-5">
          <h1 className=" text-lg font-semibold mb-2 border-b">Points</h1>
          <div className=" flex gap-2 pb-3">
            <SiSitepoint className=" text-gray-600 size-8 sm:size-5" />
            <p className=" leading-4 text-[#376c4d] font-semibold">
              Lorem ipsum dolor sit, amet consectetur adip it, amet consectetur
              adipiit, amet consectetur adipiisicing elit. Et, nulla!
            </p>
          </div>
          <div className=" flex gap-2 pb-3">
            <SiSitepoint className=" text-gray-600 size-8 sm:size-5" />
            <p className=" leading-4 text-[#376c4d] font-semibold">
              Lorem t consectetur adip it, amet congt iu sectetur adipiit, amet
              consectetur adipiisicing elit. Et, nulla!
            </p>
          </div>
          <div className=" flex gap-2 pb-3">
            <SiSitepoint className=" text-gray-600 size-8 sm:size-5" />
            <p className=" leading-4 text-[#376c4d] font-semibold">
              Lorem ipsum dolor sit, amet consepiit consectetur adipiit, amet
              consectetur adipiisicing elit. Et, nullasicing elit. Et, nulla!
            </p>
          </div>
          <div className=" flex gap-2 pb-3">
            <SiSitepoint className=" text-gray-600 size-8 sm:size-5" />
            <p className=" leading-4 text-[#376c4d] font-semibold">
              Lorem ipsum dolor sit, amet consectetur adip it, amet consectetur
              adipiit, amet consectetur adipiisicing elit. Et, nulla!
            </p>
          </div>
        </div>
        <div className="my-10 w-full mx-auto border rounded-sm shadow-md mb-16 px-5 py-3 bg-gray-100">
          <div className=" flex justify-between ">
            <p className="  font-semibold">Review</p>
            <FaRegCalendarAlt className=" size-5" />
          </div>
          <div className=" mt-3  shadow-sm hover:shadow-md bg-white hover:border-gray-300 w-11/12 sm:w-9/12 mx-auto border py-2 rounded-md flex items-center justify-center">
            <p> + Add The Place</p>
          </div>
          <div className=" mt-5">
            <p>Add Review</p>
            <div className=" flex gap-1">
              <TiStarFullOutline className=" size-6 text-gray-500" />
              <TiStarFullOutline className=" size-6 text-gray-500" />
              <TiStarFullOutline className=" size-6 text-gray-500" />
              <TiStarFullOutline className=" size-6 text-gray-300" />
              <TiStarFullOutline className=" size-6 text-gray-300" />
            </div>
          </div>
          <div className=" w-full mt-5">
            <p>Add FeedBack</p>
            <div className=" flex border bg-white shadow-md hover:shadow-lg hover:border-gray-400 duration-300">
              <input
                type="text"
                name=""
                id=""
                className=" w-10/12 md:w-11/12 py-3 outline-none px-5 "
              />
              <div className=" w-2/12 md:w-1/12 border-l border-gray-400 py-3 flex justify-center items-center">
                <TbPhotoPlus className=" size-6 hover:scale-105 duration-300" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs w-10/12 mx-auto text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla
            fugit obcaecati ea sed nosumenda recusandae itaque odit nesciunt
            fuga reiciendis. Nostruea sed nosumenda recusandae itaque odit
            nesciunt fuga reiciendis. Nostrum?
          </p>
          <div className=" flex w-full items-end justify-end my-3">
            <div className=" flex gap-4">
              <button className=" font-semibold">Cancel</button>
              <button className=" shadow-md border px-4 text-white bg-[#146e3bdd] hover:bg-[#146e3b] rounded-sm duration-300">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
