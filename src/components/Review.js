import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbPhotoPlus } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";

export default function Review() {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    if (!isRendered) {
      window.scrollTo(0, 0);
      setIsRendered(true);
    }
  }, [isRendered]);
  return (
    <div className=" slideFromLeft w-full sm:w-10/12 lg:w-8/12 mx-auto mt-10 pt-16 ">
      <div className=" w-11/12 sm:w-10/12 mx-auto border rounded-sm shadow-md mb-16 px-5 py-3 bg-gray-100">
        <div className=" flex justify-between ">
          <p className="  font-semibold">Review</p>
          <FaRegCalendarAlt className=" size-5 cursor-pointer" />
        </div>
        <div className=" mt-3  shadow-sm hover:shadow-md bg-white hover:border-gray-300 w-9/12 mx-auto border py-2 rounded-md flex items-center justify-center">
          <p> + Add The Place</p>
        </div>
        <div className=" mt-5">
          <p>Add Review</p>
          <div className=" flex gap-1">
            <TiStarFullOutline className=" size-6 text-gray-400" />
            <TiStarFullOutline className=" size-6 text-gray-400" />
            <TiStarFullOutline className=" size-6 text-gray-400" />
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
          fugit obcaecati ea sed nosumenda recusandae itaque odit nesciunt fuga
          reiciendis. Nostruea sed nosumenda recusandae itaque odit nesciunt
          fuga reiciendis. Nostrum?
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
  );
}
