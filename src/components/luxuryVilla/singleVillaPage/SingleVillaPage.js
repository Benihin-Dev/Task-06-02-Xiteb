import React, { useState, useEffect } from "react";
import { Element, Link, scrollSpy } from "react-scroll";
import { UseMainDataContext } from "../../dataContext/MainContext";
import { PiStarFill } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { RiComputerLine } from "react-icons/ri";
import { TbToolsKitchen } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import NavBarForSubPages from "../../navBar/NavBarForSubPages";
import FormForReservation from "../formForReservation/FormForReservation";
import Footer from "../../footer/Footer";
import SimilerVillas from "../similerVilla/SimilerVillas";

export default function SingleVillaPage() {
  const {
    luxuryVillaData,
    indexOfSelectedVillaForDetailedView,
    setIndexOfSelectedVillaForDetailedView,
  } = UseMainDataContext();

  const data = luxuryVillaData[indexOfSelectedVillaForDetailedView];
  const [selectedImageIndexForPriview, setSelectedImageIndexForPriview] =
    useState(0);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (!isRendered) {
      window.scrollTo(0, 0);
      setIsRendered(true);
    }
  }, [isRendered]);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [indexOfSelectedVillaForDetailedView]);
  return (
    <>
      <NavBarForSubPages />
      <div className=" w-full mt-20 pt-10">
        <div className=" w-full sm:w-11/12 md:w-10/12 px-5 pb-20 sm:px-0 mx-auto ">
          <div className=" sm:flex items-end justify-between">
            <div>
              <p className=" text-3xl font-prata text-start w-full">
                Get ready to be impressed!
              </p>
              <p className=" text-sm text-start w-full mt-2 text-gray-700">
                Don't miss your dream property - Reserve Now!
              </p>
            </div>
          </div>
          <div className=" w-full mt-8 sm:pt-5 sm:flex items-end justify-center gap-10">
            <div className="  w-full sm:w-5/12">
              <div>
                <div className=" w-full pb-3 flex items-center justify-end">
                  <Link
                    to="formForReservation"
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={0}
                  >
                    <div className=" cursor-pointer w-full sm:w-fit px-10 py-1  flex rounded bg-[#078169] hover:bg-[#256559] duration-200 text-white items-center justify-center gap-1">
                      <FaRegBookmark />
                      <p className=" text-base">Reserve now</p>
                    </div>
                  </Link>
                </div>
                <p className=" font-prata text-xl mt-5 cursor-default  ">
                  {data.name}{" "}
                </p>
                <div className=" cursor-default flex items-center gap-2">
                  <p>
                    {data.oldPrice && (
                      <span className=" line-through text-gray-400 text-sm pr-3">
                        {data.oldPrice}
                      </span>
                    )}
                    {data.newPrice}
                  </p>
                </div>
                <div className=" flex items-center text-[#ffc245] cursor-pointer justify-start w-full">
                  {" "}
                  {Array.from({ length: 5 }, (_, index) => (
                    <PiStarFill key={index} />
                  ))}
                </div>
                <p className=" cursor-default text-sm text-justify mt-5 text-gray-400">
                  {data.desc}
                </p>

                <div className=" mt-2"></div>
              </div>
            </div>
            <div className="w-full sm:w-7/12">
              <img
                src={data.img[selectedImageIndexForPriview]}
                className=" rounded-sm shadow w-full"
                alt=""
              />
              <div className=" w-full overflow-x-scroll mt-1 customScrollBarforXaxis overflow-y-hidden h-20 relative">
                <div className=" absolute top-0 left-0 flex bg-blue-400">
                  {data.img.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedImageIndexForPriview(index);
                      }}
                      className={` ${
                        selectedImageIndexForPriview === index
                          ? " border-gray-700"
                          : ""
                      } h-full w-20 sm:w-24 md:w-32 cursor-pointer bg-gray-300  border hover:border-gray-600 duration-200`}
                    >
                      <img
                        src={image}
                        className=" w-full object-cover rounded-sm "
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-[#f9f9f9] py-20">
          <div className=" w-full sm:w-11/12 md:w-10/12 px-5  sm:px-0 mx-auto ">
            <p className=" text-xl font-prata w-full text-center cursor-default">
              Property Specifications
            </p>
            <div className=" w-full  bg-[#268e79c1] rounded-md mt-5 px-5 py-10 sm:px-10 relative">
              <div className=" w-full sm:flex text-white items-starti justify-between">
                <div>
                  <p>
                    {data.squareFeet}{" "}
                    <span className=" text-sm text-gray-300 cursor-default">
                      Square Feets
                    </span>
                  </p>
                  <p className=" w-full sm:w-2/3 text-gray-200 text-xs my-2">
                    Lorem ipsum dolor sitor sit amet consectetor sit amet
                    consecoetor sit amet consecolor sit amet consectetur
                    adipisicing elit.
                  </p>
                </div>
                <div className="  w-fit ">
                  <div className=" flex items-start sm:justify-center mt-2 sm:mt-0 gap-1 sm:px-5">
                    <ImLocation className=" text-red-200" />
                    <p className="   text-white text-sm cursor-default">
                      {data.location}
                    </p>
                  </div>
                  <div className=" w-full flex items-center sm:justify-end sm:px-5 mt-1">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLS5p19OluIyGuYOTJAmkED0LNupcLV09GA&s"
                      alt=""
                      className=" cursor-pointer w-28 rounded-sm border border-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5 sm:gap-10">
                <div className=" border-[#ffffff] bg-[#f9f9f9bd]  border shadow  rounded py-4">
                  <div className="  w-full text-center pb-3 cursor-default text-[#000000] flex items-center justify-center gap-1">
                    <RiComputerLine />
                    <p className="">Main Hall & Halls</p>
                  </div>
                  <div className=" flex items-center gap-2 bg-[#f4f4f4] pt-2 px-4">
                    <p className=" text-sm text-gray-400 cursor-default">
                      No.of Halls:{" "}
                    </p>
                    <p className=" text-sm text-black cursor-default">03 </p>
                  </div>
                  <div className=" flex items-center gap-2 bg-[#f4f4f4] pb-2 mb-2 px-4">
                    <p className=" text-sm text-gray-400 cursor-default">
                      Avg.Size{" "}
                    </p>
                    <p className=" text-sm text-black cursor-default">
                      52 Squ ft{" "}
                    </p>
                  </div>
                  <p className=" text-xs text-gray-500 px-4 cursor-default">
                    Lorem ipsumwe dolor, sit amet cowensectetur adipisict amet
                    consecwertetur adipisicing elit.
                  </p>
                  <div className=" mt-3 px-4">
                    <p className=" text-sm cursor-default">Images:</p>
                    <div className=" w-full flex gap-2 mt-1 items-center">
                      {Array.from({ length: 3 }, (_, index) => (
                        <div
                          key={index}
                          className=" size-8 border border-blue-500 cursor-pointer"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" border-[#ffffff] bg-[#f9f9f9bd] border shadow  rounded py-4">
                  <div className="  w-full text-center pb-3 cursor-default text-[#000000] flex items-center justify-center gap-1">
                    <IoBedOutline className="size-5" />
                    <p className="">Bed Rooms</p>
                  </div>

                  <div className=" flex items-center gap-2 bg-[#f4f4f4] pt-2 px-4">
                    <p className=" text-sm text-gray-400 cursor-default">
                      No.of BedRooms:{" "}
                    </p>
                    <p className=" text-sm text-black cursor-default">
                      08 Rooms{" "}
                    </p>
                  </div>
                  <div className=" flex items-center gap-2 bg-[#f4f4f4] pb-2 mb-2 px-4">
                    <p className=" text-sm text-gray-400 cursor-default">
                      Avg.Size{" "}
                    </p>
                    <p className=" text-sm text-black cursor-default">
                      28 Squ ft{" "}
                    </p>
                  </div>
                  <p className=" text-xs text-gray-500 px-4 cursor-default">
                    Lorem ipsumwe dolor, sit amet cowensectetur adipisict amet
                    consecwertetur adipisicing elit.
                  </p>
                  <div className=" mt-3 px-4">
                    <p className=" text-sm cursor-default">Images:</p>
                    <div className=" w-full flex gap-2 mt-1 items-center">
                      {Array.from({ length: 3 }, (_, index) => (
                        <div
                          key={index}
                          className=" size-8 border border-blue-500 cursor-pointer"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" border-[#ffffff] bg-[#f9f9f9bd] border shadow  rounded py-4">
                  <div className="  w-full text-center pb-3 cursor-default text-[#000000] flex items-start justify-center gap-1">
                    <TbToolsKitchen />
                    <p className="">Kitchens</p>
                  </div>
                  <div className=" flex items-center gap-2 bg-[#f4f4f4] pt-2 px-4">
                    <p className=" text-sm text-gray-400 cursor-default">
                      No.of Kitchen:{" "}
                    </p>
                    <p className=" text-sm text-black cursor-default">02 </p>
                  </div>
                  <div className=" flex items-center gap-2 bg-[#f4f4f4] pb-2 mb-2 px-4">
                    <p className=" text-sm text-gray-400 cursor-default">
                      Avg.Size{" "}
                    </p>
                    <p className=" text-sm text-black cursor-default">
                      35 Squ ft{" "}
                    </p>
                  </div>
                  <p className=" text-xs text-gray-500 px-4 cursor-default">
                    Lorem ipsumwe dolor, sit amet cowensectetur adipisict amet
                    consecwertetur adipisicing elit.
                  </p>
                  <div className=" mt-3 px-4">
                    <p className=" text-sm cursor-default">Images:</p>
                    <div className=" w-full flex gap-2 mt-1 items-center">
                      {Array.from({ length: 3 }, (_, index) => (
                        <div
                          key={index}
                          className=" size-8 border border-blue-500 cursor-pointer"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="formForReservation"
                smooth={true}
                duration={500}
                spy={true}
                offset={0}
              >
                <div
                  className={` absolute top-0 right-0 text-sm cursor-pointer w-full sm:w-fit px-10 py-1 border flex rounded hover:bg-[#e6e5e5] bg-[#ffffff] border-[#268e79c1] duration-200 text-black items-center justify-center gap-1`}
                >
                  <FaRegBookmark />
                  <p>Reserve it now</p>
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SimilerVillas />
      <Element name="formForReservation">
        <FormForReservation />
      </Element>
      <Footer />
    </>
  );
}
