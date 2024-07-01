import React from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

export default function Grid({ data }) {
  return (
    <div className=" mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-8">
      {data.map((item, index) => (
        <div
          key={index}
          className=" relative w-full border-4 overflow-hidden hover:border-[#a1dcf3] bg-white shadow cursor-pointer items-center  flex sm:block border-gray-100    duration-200 p-3 "
        >
          <div className="sm:border-b sm:pt-3 border-r sm:border-r-transparent border-gray-300 pr-5 mr-5 sm:pr-0 sm:mr-0 sm:pb-5 flex">
            <div className=" size-28 lg:size-40 overflow-hidden mx-auto flex items-center justify-center">
              <img
                src={item.Image}
                className=" h-full w-full hover:scale-110 sm:hover:scale-120 duration-200  sm:px-2 sm:pb-5  object-cover  "
                alt=""
              />
            </div>
          </div>
          <div className=" w-full">
            <p className=" w-full text-center mt-5   cursor-default">
              {item.name}
            </p>
            <div className=" w-full flex items-center justify-center">
              <div className=" flex">
                {Array.from({ length: 5 }, (_, index) =>
                  index < item.rating ? (
                    <HiStar key={index} className="text-[#ffad33] size-4" />
                  ) : (
                    <HiOutlineStar key={index} className="text-gray-400" />
                  )
                )}
              </div>
            </div>
            <div className=" w-full flex items-center justify-center gap-2">
              {item.sale && (
                <p className="   line-through text-xs text-gray-400 cursor-default">
                  $ {item.price}
                </p>
              )}
              <p className="  text-[#0096cf] cursor-default">
                $ {item.salePrice}
              </p>
            </div>
            <div className=" w-full flex items-center justify-center mt-3">
              <button className=" py-1 border-[#ebd31f] duration-200 hover:bg-[#ebd31f] rounded-sm border text-sm  sm:text-xs lg:text-sm w-full ">
                {" "}
                Add to Cart
              </button>
            </div>
          </div>

          {item.sale && (
            <div className=" cursor-default absolute rounded-sm top-0 right-0 text-xs bg-[#ffad33] px-4 py-1">
              Sale!
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
