import React from "react";

export default function SaleProductGrid({ data }) {
  return (
    <div className=" w-full sm:w-2/3 lg:w-3/4 sm:grid-cols-4 grid grid-cols-2 gap-5 p-5 sm:p-3 lg:p-5">
      {data.map((item, index) => (
        <div className=" relative w-full border bg-white shadow   border-gray-200 hover:shadow-gray-400  duration-200 p-3 ">
          <div className=" w-full flex items-center justify-center">
            <img
              src={item.image}
              className=" size-32  sm:size-24 lg:size-36 pt-3 px-3 pb-5 border-b border-gray-300 object-cover  "
              alt=""
            />
          </div>
          <p className=" w-full text-center mt-5  font-semibold">{item.name}</p>
          <p className="  w-full text-center line-through text-xs text-gray-400">
            $ {item.offerPrice}
          </p>
          <p className="  w-full text-center    text-[#fc6f33]">
            $ {item.price}
          </p>

          <div className=" w-full flex items-center justify-center mt-3">
            <button className=" py-1 bg-[#ffad33] duration-200 hover:bg-[#fc7339] text-sm  sm:text-xs lg:text-sm w-full ">
              {" "}
              Add to Cart
            </button>
          </div>
          <div className=" absolute rounded-sm top-0 right-0 text-xs bg-[#38a9d6] text-white px-4 py-1">
            Sale
          </div>
        </div>
      ))}
    </div>
  );
}
