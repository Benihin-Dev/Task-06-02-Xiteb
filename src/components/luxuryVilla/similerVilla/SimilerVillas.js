import React from "react";
import { UseMainDataContext } from "../../dataContext/MainContext";

export default function SimilerVillas() {
  const { luxuryVillaData, setIndexOfSelectedVillaForDetailedView } =
    UseMainDataContext();

  return (
    <div className=" w-full px-5 sm:px-0 sm:w-11/12 md:w-10/12 mx-auto pb-24 border-b  pt-20 ">
      <p className=" text-2xl font-prata text-start w-full ">
        Similer Collections
      </p>
      <div className=" mt-10 w-full relative  h-52 overflow-x-scroll customScrollBarforXaxis">
        <div className=" absolute top-0 left-0  ">
          <div className=" w-full  flex gap-6 items-center justify-center">
            {luxuryVillaData.map((villa, index) => (
              <div
                onClick={() => {
                  setIndexOfSelectedVillaForDetailedView(index);
                }}
                key={index}
                className=" cursor-pointer border rounded-sm hover:shadow-md shadow-sm overflow-hidden w-52 h-full"
              >
                <img src={villa.img[0]} className=" w-full" alt="" />
                <p className=" w-full  px-4 leading-4 pt-1 text-center">
                  {villa.name}
                </p>
                <p className=" w-full leading-4 text-center mt-2 pb-1 text-[#078169] text-sm">
                  {villa.newPrice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
