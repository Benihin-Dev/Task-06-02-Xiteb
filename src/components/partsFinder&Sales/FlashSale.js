import React from "react";
import Timer from "./Timer";
import SaleProductGrid from "./SaleProductGrid";

export default function FlashSale() {
  const endDate = new Date(2024, 6, 22, 18, 1);
  const offerProducts = [
    {
      name: "RaceLine Wheel",
      image:
        "https://racelinewheels.com/cdn/shop/products/Sniper5_Blue_shadow.png?v=1675809930",
      price: "5000",
      offerPrice: "3500",
    },
    {
      name: "RGS Turbo",
      image:
        "https://cctturbo.com.au/cdn/shop/files/DSC00733.png?v=1706764421&width=640",
      price: "1520",
      offerPrice: "850",
    },
    {
      name: "Shock breaker",
      image:
        "https://scarletracing.com/wp-content/uploads/2023/09/Untitled-4-2-1024x1024-1.png",
      price: "7520",
      offerPrice: "5500",
    },
    {
      name: "Brake Kit",
      image: "https://ohmymi.com.my/wp-content/uploads/2021/03/6-1.png",
      price: "6520",
      offerPrice: "4850",
    },
  ];
  return (
    <div className=" w-full    ">
      <div className=" w-full h-8 bg-white"></div>
      <div className=" w-full  bg-transparent flex">
        <div className=" hidden sm:block sm:w-[4.1666666%]   bg-white"></div>
        <div className="  w-full h-full bg-[#ffffffc7] sm:flex  ">
          <div className=" w-full sm:w-1/3 overflow-hidden lg:w-1/4 border-b sm:border-b-transparent sm:border-r border-gray-400 border-dashed p-5 sm:p-3 lg:p-5 flex items-end justify-start">
            <div className=" w-full  ">
              <p className=" text-5xl font-semibold mt-10 ">
                Flash <span className=" text-[#0096cf]">Sale</span>
              </p>
              <p className=" text-sm text-gray-500 leading-4">
                Get the Best Offers on our exclusive auto parts.
              </p>
              <div>
                <Timer endDate={endDate} />
              </div>
            </div>
          </div>
          <SaleProductGrid data={offerProducts} />
        </div>
        <div className=" hidden sm:block sm:w-[4.1666666%]  bg-white"></div>
      </div>
      <div className=" w-full h-8 bg-white"></div>
    </div>
  );
}
