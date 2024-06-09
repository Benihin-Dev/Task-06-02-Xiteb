import React, { useState, useRef } from "react";
import { useDataContext } from "../MainDataContext";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import Cookies from "js-cookie";

export default function SliderForProducts({ data }) {
  const { setFrequentProductData } = useDataContext();
  const navigate = useNavigate();
  const products = data.data;
  const slides = products.map((item) => item);
  const sliderRef = useRef(null);

  //next btn function
  const handleNextSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickNext();
  };

  //previous btn function
  const handlePrevSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickPrev();
  };

  //store frequent Clicked Products list on cookies
  function collectFrequentViewdProducts(item) {
    const prevProducts = Cookies.get("frequentlyClickedProducts")
      ? JSON.parse(Cookies.get("frequentlyClickedProducts"))
      : [];

    const existingProductIndex = prevProducts.findIndex(
      (p) => p.productID === item.id
    );

    let updatedProducts;
    if (existingProductIndex !== -1) {
      updatedProducts = prevProducts.map((p, index) =>
        index === existingProductIndex
          ? { ...p, clickedCount: p.clickedCount + 1 }
          : p
      );
    } else {
      updatedProducts = [
        ...prevProducts,
        { productID: item.id, clickedCount: 1 },
      ];
    }

    setFrequentProductData(updatedProducts);
    Cookies.set("frequentlyClickedProducts", JSON.stringify(updatedProducts), {
      expires: 30,
    });
  }

  return (
    <div className="slideUp w-full bg-[#f9feff] py-5">
      <div className=" py-3 w-full sm:px-0 sm:w-11/12 md:w-10/12 mx-auto flex items-end justify-between gap-5">
        <div className=" w-full gap-5 relative">
          <div className=" px-4 sm:px-0 cursor-default">
            <p className={`${data.title.color} text-3xl  `}>
              {data.title.quote}
            </p>
            <p className={`${data.subTitle.color} sm:w-4/5   leading-4 pb-2`}>
              {data.subTitle.quote}{" "}
            </p>
          </div>

          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={data.autoplaySpeed}
            speed={500}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2.2,
                },
              },
            ]}
          >
            {slides.map((item, index) => (
              <div
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  collectFrequentViewdProducts(item);
                }}
                key={index}
                className="border cursor-pointer  bg-[#f9f9f9] overflow-hidden rounded-sm shadow-sm hover:shadow-gray-300 hover:border-gray-400 border-[#eaeaea] duration-200 pt-5"
              >
                <div className="flex items-center justify-center h-[15vh] sm:h-[20vh] lg:h-[28vh] overflow-hidden rounded-sm shadow-sm  pt-2">
                  <img
                    src={item.images[0]}
                    alt=""
                    className=" h-full pb-2 object-contain"
                  />
                </div>
                <div className="bg-white pt-2 flex flex-col">
                  <div className="px-1 mt-auto">
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
                    <p className="text-xs font-semibold w-full text-center sm:text-sm text-indigo-500">
                      {item.name}
                    </p>
                    <p className="font-semibold w-full text-center text-sm text-[#f86561] pb-2">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div
            className="  absolute top-[60%] sm:top-[50%] left-1 py-2 hover:text-white hover:bg-gray-200 hover:left-0 border border-gray-200 rounded-sm bg-[#eeededbe]"
            onClick={handlePrevSlide}
          >
            <IoIosArrowForward className="text-gray-400 rotate-180 size-5" />
          </div>
          <div
            className="  absolute top-[60%] sm:top-[50%] right-1 py-2   hover:bg-gray-200 hover:right-0 border border-gray-200 rounded-sm bg-[#eeededbe]"
            onClick={handleNextSlide}
          >
            <IoIosArrowForward className="text-gray-400 size-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
