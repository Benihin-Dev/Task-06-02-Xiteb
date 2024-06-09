import React from "react";
import { useDataContext } from "../MainDataContext";
import { useNavigate } from "react-router-dom";
export default function ProductCollections() {
  const navigate = useNavigate();
  const { products } = useDataContext();
  return (
    <div className=" slideUp w-full bg-[#d3f5ff6d] ">
      <div className="w-full px-5 sm:px-0 sm:w-11/12 md:w-10/12 mx-auto py-20">
        <p className=" pb-2 text-[#848484] cursor-default  leading-5 sm:w-3/5 font-semibold">
          <span className=" text-[#9571f4] text-3xl sm:text-4xl">
            Welcome!.
          </span>{" "}
          <br /> Explore our exclusive product collection, meticulously curated
          to elevate your style and simplify your life.
        </p>
        <button
          onClick={() => {
            navigate("/allProducts");
          }}
          className=" border px-10 py-1 mb-4 bg-[#fc5957] hover:bg-[#ed403d] duration-200 text-white rounded-sm"
        >
          See All Products
        </button>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(products.productCollection).map(
            ([key, value, index]) => (
              <div
                key={key}
                className=" border cursor-pointer  bg-white shadow-md shadow-indigo-100 hover:shadow-[#9471f44a] duration-200"
              >
                <p className=" leading-4  font-semibold text-gray-800 bg-indigo-100 px-3 pt-5 pb-2 mb-3">
                  {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
                </p>
                <div className=" grid grid-cols-2 gap-3 px-2 mt-6 mb-4 sm:px-4">
                  {value.map((item, index) => (
                    <div key={index} className=" w-full  mb-3">
                      <img
                        src={item.image}
                        alt=""
                        className=" w-full h-full  border"
                      />
                      <p className=" leading-3 w-full text-  text-gray-600 text-xs">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
