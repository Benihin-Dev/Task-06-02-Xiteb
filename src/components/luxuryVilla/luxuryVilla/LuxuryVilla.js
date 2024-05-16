import React from "react";
import { UseMainDataContext } from "../../dataContext/MainContext";
import { useNavigate } from "react-router-dom";
import { PiStarFill } from "react-icons/pi";

export default function LuxuryVilla() {
  //luxuryVillaData
  const { luxuryVillaData, setIndexOfSelectedVillaForDetailedView } =
    UseMainDataContext();
  const navigate = useNavigate();

  return (
    <div className=" w-full py-10 sm:py-20 bg-[#f9f9f9] ">
      <div className=" w-11/12 sm:w-10/12 mx-auto">
        <h1 className=" text-3xl px-5 text-[#181818] font-prata w-full text-center cursor-default">
          Searching For The Best Places?
        </h1>
        <p className=" px-5 text-gray-400 w-full text-center text-sm cursor-default">
          Handpicked properties by our Agents
        </p>
      </div>
      <div className=" w-full px-5 sm:w-11/12 md:w-10/12 sm:px-0 mx-auto pt-16">
        <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* luxuryVillaData mapping */}
          {luxuryVillaData.map((luxuryVilla, index) => (
            <div
              key={index}
              onClick={() => {
                setIndexOfSelectedVillaForDetailedView(index);
                navigate("/villa");
              }}
              className=" cursor-pointer w-full duration-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md pb-8 bg-white "
            >
              <img src={luxuryVilla.img[0]} className=" w-full" alt="" />
              <p className=" font-prata mt-7 w-full px-3 text-center cursor-default">
                {luxuryVilla.name}
              </p>
              <div className=" flex items-center text-[#ffc245] cursor-pointer mt-4 justify-center w-full">
                {" "}
                {Array.from({ length: 5 }, (_, index) => (
                  <PiStarFill key={index} />
                ))}
              </div>
              <p className="  w-full text-center mt-3 text-[#078169] cursor-default">
                {luxuryVilla.oldPrice !== null ? (
                  <span className=" text-sm pr-2 line-through text-gray-400">
                    {luxuryVilla.oldPrice}
                  </span>
                ) : (
                  ""
                )}
                {luxuryVilla.newPrice}
              </p>

              <div className=" px-5 text-[14px] mt-3 space-y-3">
                <div className=" flex items-center justify-between">
                  <p className=" text-gray-400 cursor-default">BEDROOM:</p>
                  <p className=" text-[#afafb1] cursor-default font-medium">
                    {luxuryVilla.rooms.bedRoomCount}
                  </p>
                </div>
                <div className=" flex items-center justify-between border-t border-b py-2">
                  <p className=" text-gray-400 cursor-default">SQUARE FEET:</p>
                  <p className=" text-[#afafb1] cursor-default font-medium">
                    {luxuryVilla.squareFeet}
                  </p>
                </div>
                <div className=" flex items-center justify-between">
                  <p className=" text-gray-400 cursor-default">LOCATION:</p>
                  <p className=" text-[#afafb1] cursor-default font-medium">
                    {luxuryVilla.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-full flex items-center justify-center">
          <button className=" px-5 py-2 rounded text-white text-sm mt-7 bg-[#078169] ">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
}
