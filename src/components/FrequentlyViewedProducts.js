import React, { useEffect, useState } from "react";
import { useDataContext } from "./MainDataContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function FrequentlyViewedProducts() {
  const { products, frequentProductData, setFrequentProductData } =
    useDataContext();
  const [frequentProduct, setFrequentProduct] = useState([]);
  const navigate = useNavigate();

  //sort the frequent clicked items
  useEffect(() => {
    if (frequentProductData.length > 0) {
      const allProducts = [
        ...products.mobilePhones,
        ...products.mobileAccessories,
        ...products.keyBoardPhones,
      ];
      const sortedProducts = frequentProductData
        .map((item) => ({
          product: allProducts.find((p) => p.id === item.productID),
          clicks: item.clickedCount,
        }))
        .sort((a, b) => b.clicks - a.clicks);

      setFrequentProduct(sortedProducts);
    }
  }, [frequentProductData]);

  
  useEffect(() => {
    const freqProducts = Cookies.get("frequentlyClickedProducts")
      ? JSON.parse(Cookies.get("frequentlyClickedProducts"))
      : [];
    setFrequentProductData(freqProducts);
  }, []);

  return (
    <div
      className={` ${
        frequentProductData.length === 0 ? "hidden" : ""
      } w-full py-12 bg-[#f1fcff6d]  `}
    >
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 md:w-10/12 mx-auto ">
        <p className=" cursor-default text-[#d2756a] text-3xl">
          Your Top Picks, Just a Click Away!
        </p>
        <div className=" relative w-full  h-[32vh] sm:h-[50vh] lg:h-[50vh] customScrollBarforXaxis overflow-y-hidden">
          <div className=" absolute top-5 left-0">
            <div className=" flex gap-5 sm:gap-8 ">
              {frequentProduct.map((item, index) => (
                <div
                  onClick={() => {
                    navigate(`/product/${item.product.id}`);
                  }}
                  key={index}
                  className="border slideFromRight cursor-pointer bg-[#dae4e272] w-[45vw] sm:w-[28vw]  md:w-[20vw]  lg:w-[15vw]  overflow-hidden rounded-sm shadow-sm hover:shadow-gray-300 hover:border-gray-400 border-[#eaeaea] duration-200 pt-5"
                >
                  <div className="flex items-center justify-center h-[15vh] sm:h-[20vh] lg:h-[28vh] overflow-hidden rounded-sm shadow-sm  pt-2">
                    <img
                      src={item.product.images[0]}
                      alt=""
                      className=" h-full pb-2 object-contain"
                    />
                  </div>
                  <div className="bg-white pt-2 flex flex-col">
                    <div className="px-1 mt-auto h-full">
                      <p className="text-xs leading-3 font-semibold w-full text-center sm:text-sm text-indigo-500">
                        {item.product.name}
                      </p>
                      <p className="font-semibold w-full text-center text-sm text-[#f86561] pb-2">
                        ${item.product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
