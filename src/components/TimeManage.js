import React from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowRightLong } from "react-icons/fa6";
import weekShowerImg from "../images/weekShower.png";

export default function TimeManage() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } w-full bg-[#f2f6ff] pt-20 pb-10 sm:pb-20`}
    >
      <div className=" w-11/12 sm:w-9/12 items-center mx-auto sm:flex text-[#1433ff] pt-12 pb-5">
        <div className=" sm:w-6/12 px-5">
          <div className="  w-full flex ">
            <div className=" w-1/2">
              <div className=" shadow-md hover:shadow-gray-400 duration-200 mx-auto my-2 w-[38vw] h-[22vw] sm:w-[15vw] sm:h-[8vw] bg-white text-black relative overflow-hidden rounded-xl">
                <p className=" absolute top-[10%] left-[10%] text-sm">
                  Balance
                </p>
                <p className="text-[#1433ff] text-[18px] font-bold absolute top-[50%] left-[10%] text-sm leading-4">
                  LKR <br /> 53,154.00
                </p>
                <div className="absolute top-[0%] left-[75%] size-[22vw] sm:size-[8vw] rounded-full bg-[#c4ccff]"></div>
              </div>
            </div>
            <div className="  w-1/2">
              <div className=" shadow-md hover:shadow-gray-400 duration-200 mx-auto my-2 w-[38vw] h-[22vw] sm:w-[15vw] sm:h-[8vw] bg-white text-black relative overflow-hidden rounded-xl">
                <p className=" absolute top-[10%] left-[10%] text-sm">
                  Last Transaction
                </p>
                <p className="text-[#1433ff] text-[18px] font-bold absolute top-[50%] left-[10%] text-sm leading-4">
                  LKR <br />
                  6240.00
                </p>
                <div className="absolute top-[0%] left-[75%] size-[22vw] sm:size-[8vw] rounded-full bg-[#c4ccff]"></div>
              </div>
            </div>
          </div>
          <div className=" w-full mt-4">
            <img
              src={weekShowerImg}
              className=" bg-white rounded-xl sm:w-11/12 mx-auto shadow-lg hover:shadow-gray-400 duration-200"
              alt=""
            />
          </div>{" "}
        </div>
        <div className=" sm:px-10 px-5 lg:px-20 sm:w-6/12 mt-10 sm:mt-0 ">
          <h1 className=" text-3xl sm:text-[3vw] sm:leading-[3vw] font-bold">
            Manage your finance like a pro in no time
          </h1>
          <p className=" mt-5 sm:mt-3 md:mt-[2vw] w-4/5 sm:w-full lg:pr-16 text-sm">
            With Coinwave, book keeping, banking, and invoices are all in one
            place. You will always know where you stand.
          </p>
          <div className=" w-fit flex items-center gap-2 rounded-xl text-[#12183d] bg-white hover:bg-[#12183d] hover:text-white px-6 py-[6px] border border-[#ff6262] duration-200 mt-[5vw]">
            <button className="  ">Learn more</button>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
}

//bg-[#f2f6ff]
