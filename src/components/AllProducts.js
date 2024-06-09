import React from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./MainDataContext";

export default function AllProducts() {
  const navigate = useNavigate();
  const { products } = useDataContext();

  // Fisher-Yates shuffle algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  //store all product data
  const allProducts = shuffleArray([
    ...products.mobilePhones,
    ...products.mobileAccessories,
    ...products.keyBoardPhones,
  ]);

  return (
    <div className=" w-full pt-32 border pb-20">
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-10 w-full px-5 sm:px-0 sm:w-11/12 md:w-10/12 mx-auto ">
        {allProducts.map((item, index) => (
          <div
            onClick={() => {
              navigate(`/product/${item.id}`);
            }}
            key={index}
            className="border   bg-[#f9f9f9] overflow-hidden rounded-sm shadow-sm hover:shadow-gray-300 hover:border-gray-400 border-[#eaeaea] duration-200 pt-5"
          >
            <div className="flex items-center justify-center h-[15vh] sm:h-[20vh] lg:h-[28vh] overflow-hidden rounded-sm shadow-sm  pt-2">
              <img
                src={item.images[0]}
                alt=""
                className=" h-full pb-2 object-contain"
              />
            </div>
            <div className="bg-white pt-2 flex flex-col">
              <div className="px-1 mt-auto h-full">
                <div className="flex items-end justify-center">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) =>
                      index < item.rating.rate ? (
                        <HiStar
                          key={index}
                          className="text-[#ffad33d5] size-4"
                        />
                      ) : (
                        <HiOutlineStar
                          key={index}
                          className="text-gray-400 size-4"
                        />
                      )
                    )}
                  </div>
                  <p className="text-gray-500 text-[10px]">
                    ({item.rating.totalReview})
                  </p>
                </div>
                <p className="text-xs leading-3 font-semibold w-full text-center sm:text-sm text-indigo-500">
                  {item.name}
                </p>
                <p className="font-semibold w-full text-center text-sm text-[#f86561] pb-2">
                  ${item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
