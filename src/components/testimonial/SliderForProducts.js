import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

export default function SliderForProducts({ data }) {
  const testimonials = [
    {
      customerName: "Jim Gorden",
      comment:
        "Lorem, ipsum dolor sit adipisicing elit. Explicabo, dignissimos! Doloremque, esse. Eos doloremque commodi deserunt doing elit. Explicabo, dignissimos! Doloremque, esse. Eos doloremquelores, exercitationem",
      rating: 4,
      image:
        "https://png.pngtree.com/png-clipart/20231104/original/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_13504468.png",
      place: "Gotham",
    },
    {
      customerName: "Jhon Wick",
      comment:
        "Ldolor  amet consectetur adipisicing elit. Explicabo, dignissimos! Doloremque, esse. Eos ding elit. Explicabo, dignissimos! Doloremque, esse. Eos doloremqueoloremque commodi deserunt dolores, exercitationem",
      rating: 5,
      image:
        "https://www.transparentpng.com/thumb/doctor/smiling-handsome-doctor-free-png--3kFuBJ.png",
      place: "New York",
    },
    {
      customerName: "Billy Butcher",
      comment:
        "Lorem adipisicing elit. Explicab kjgsfdik jk,mo, dignissimos! Doloremque, esse. Eos doloremqueing elit. Explicabo, dignissimos! Doloremque, esse. Eos doloremque commodi deserunt dolores, exercitationem",
      rating: 4,
      image:
        "https://www.transparentpng.com/thumb/man/psW26l-download-man-png-image-png-image-freepngimg.png",
      place: "London",
    },
    {
      customerName: "Serina Cayle",
      comment:
        "Dsit amet consectetur adipisicing elit. Explicabo, dignissimos! Doloremque, esse. Eos doloremque commodi deserunt dolores, exing elit. Explicabo, dignissimos! Doloremque, esse. Eos doloremqueercitationem",
      rating: 5,
      image:
        "https://images.nymag.com/images/2/daily/2010/06/20100611_jenniferlawrence-silo_250x375.png",
      place: "Dakkah",
    },
    {
      customerName: "Thomas Shelby",
      comment:
        "Lorem,   amet consectetur. Explicabo, dignissimos! Doloremque, esse. Eos doloremque commodi deserunt dolores, exercitationem ing elit. Explicabo, dignissimos! Doloremque, esse. Eos doloremque",
      rating: 5,
      image:
        "https://purepng.com/public/uploads/large/purepng.com-manmanadult-malemale-childboy-beingmens-1421526920943c4xhn.png",
      place: "Broklin",
    },
  ];
  const slides = testimonials.map((item) => item);
  const sliderRef = useRef(null);

  return (
    <div className="slideUp w-full bg-transparent py-5">
      <div className=" py-3 w-full sm:px-0 sm:w-11/12 md:w-10/12 mx-auto flex items-end justify-between gap-5">
        <div className=" w-full gap-5 relative  ">
          <Slider
            ref={sliderRef}
            arrows={false}
            dots={false}
            infinite={true}
            slidesToShow={2}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            speed={1000}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1.9,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {slides.map((item, index) => (
              <div key={index} className=" w-full     ">
                <div className=" border rounded-sm shadow-md mb-2   bg-white p-4 mx-2 sm:mx-3 md:mx-4 lg:mx-5">
                  <div className="flex items-start justify-start pb-3 ">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, index) =>
                        index < item.rating ? (
                          <HiStar
                            key={index}
                            className="text-[#ffad33d5] size-3"
                          />
                        ) : (
                          <HiOutlineStar
                            key={index}
                            className="text-gray-400 size-3"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <p className=" text-[12px] text-gray-500">{item.comment}</p>
                  <div className=" w-full flex gap-1 items-center pt-4">
                    <div className=" w-2/3 grid grid-cols-3 gap-4">
                      <div className=" h-12 w-12  border-4 rounded-full overflow-hidden bg-gray-50">
                        <img
                          src={item.image}
                          alt=""
                          className=" object-cover h-12 w-12 overflow-hidden"
                        />
                      </div>
                      <div>
                        <p className=" leading-4 text-sm font-semibold">
                          {item.customerName}
                        </p>
                        <p className=" text-xs text-gray-400 ">{item.place}</p>
                      </div>
                    </div>
                    <div className=" relative w-1/3 flex items-center justify-end">
                      <p className="text-9xl text-[#ffad33] absolute -top-7">
                        "
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
