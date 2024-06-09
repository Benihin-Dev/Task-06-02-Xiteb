import React, { useState, useEffect } from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { useDataContext } from "./MainDataContext";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useDataContext();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedPicIndexForPreview, setSelectedPicIndexForPreview] =
    useState(0);
  const n = 2;

  const setSelectedProductById = (id) => {
    const allProducts = [
      ...products.mobilePhones,
      ...products.mobileAccessories,
      ...products.keyBoardPhones,
    ];
    const selectedProduct = allProducts.find((product) => product.id === id);
    setSelectedProduct(selectedProduct);
  };

  useEffect(() => {
    setSelectedProductById(id);
  }, []);

  return (
    <>
      {selectedProduct && (
        <div className=" w-11/12 md:w-10/12 mx-auto pt-16 sm:pt-16 gap-5 pb-20 ">
          <div
            onClick={() => {
              navigate("/");
            }}
            className=" px-4 rounded-full cursor-pointer border border-gray-100 hover:text-[#f27b7e] text-gray-400 bg-[#f9f9f9] w-fit mb-10"
          >
            <IoIosArrowRoundBack className=" size-5" />
          </div>{" "}
          <div className=" sm:flex gap-4 ">
            <div className=" w-full sm:w-7/12 flex gap-4 ">
              <div className=" w-4/12 h-[60vw] sm:h-[30vw] customScrollBar overflow-y-scroll space-y-2 rounded">
                {selectedProduct.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedPicIndexForPreview(index);
                    }}
                    className=" mx-auto size-[20vw] overflow-hidden sm:size-[10vw] flex items-center justify-center border hover:border-[#bb9efbc9] duration-200 bg-[#f5f5f5] rounded"
                  >
                    <img
                      src={image}
                      alt=""
                      className=" p-3  w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="h-[60vw] w-8/12 sm:h-[30vw] border  overflow-hidden  flex items-center justify-center bg-[#f5f5f5] rounded">
                <img
                  src={selectedProduct.images[selectedPicIndexForPreview]}
                  alt=""
                  className=" w-full p-5"
                />
              </div>
            </div>
            <div className=" slideFromRight mt-5 sm:mt-0 w-full sm:w-5/12 px-1">
              <div>
                <p className=" cursor-default text-[#ac87f9] text-lg font-semibold">
                  {selectedProduct.name}
                </p>
                <p className="text-gray-800  cursor-default font-semibold">
                  {selectedProduct.subNames}
                </p>
                <ul className=" flex gap-2 items-center">
                  <li>
                    <div className=" flex items-center">
                      <div className=" flex">
                        {Array.from({ length: 5 }, (_, index) =>
                          index < selectedProduct.rating.rate ? (
                            <HiStar key={index} className="text-[#ffad33]" />
                          ) : (
                            <HiOutlineStar
                              key={index}
                              className="text-gray-400"
                            />
                          )
                        )}
                      </div>
                      <p className=" text-xs">
                        ({selectedProduct.rating.totalReview})
                      </p>
                    </div>
                  </li>
                  <li> | </li>
                  <li>
                    {selectedProduct.availableStockQty > 0 ? (
                      <p
                        onClick={() => {
                          console.log(id);
                        }}
                        className=" cursor-default text-green-500 text-sm"
                      >
                        In Stock
                      </p>
                    ) : (
                      <p className=" cursor-default text-red-500 text-sm">
                        Out off Stock
                      </p>
                    )}
                  </li>
                </ul>
                <p className=" cursor-default text-base">
                  ${selectedProduct.price}
                </p>
                <p className="cursor-default text-justify text-gray-800 text-sm pt-5 leading-4">
                  {selectedProduct.description}
                </p>
                <p className=" border-b w-full pt-5"></p>
                <div className=" mt-3">
                  <p className=" text-gray-400 pb-3 ">Specifications</p>
                  <ul className=" text-sm">
                    {Object.entries(selectedProduct.specification).map(
                      ([key, value]) => (
                        <li key={key}>
                          <span className=" text-gray-400 font-semibold pr-1">
                            {key}:
                          </span>{" "}
                          {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <button
                  onClick={() => {}}
                  className=" w-8/12 hover:bg-[#db4444] mt-5 sm:py-[7px] py-[8px] rounded duration-200 text-white text-sm bg-[#dd6161]"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
