import React from "react";
import { useInView } from "react-intersection-observer";
import peopleImg from "../images/peoplePic.png";
import messageImg from "../images/messagePic.png";

export default function SupportConversation() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className={`  w-full bg-[#f2f6ff] pt-0 sm:pt-10`}>
      <div
        ref={ref}
        className={`animated-component ${inView ? "is-visible" : ""}
      w-11/12 sm:w-9/12 mx-auto items-center sm:flex text-[#1433ff] pt-12 pb-5`}
      >
        <div className=" sm:px-10 px-5 sm:w-6/12 mt-10 sm:mt-0 ">
          <h1 className=" text-3xl sm:text-[3vw] sm:leading-[3vw] font-bold">
            Manage your finance like a pro in no time
          </h1>
          <p className=" mt-5 sm:mt-3 md:mt-[2vw] w-4/5 sm:w-full lg:pr-16 text-sm">
            With Coinwave, book keeping, banking, and invoices are all in one
            place. You will always know where you stand.
          </p>
          <div className="flex items-center duration-200">
            <img src={peopleImg} className="w-[40vw] sm:w-[18vw]" alt="" />
            <p>+20</p>
          </div>
        </div>
        <div className=" sm:w-6/12 px-5 mt-10 sm:mt-0">
          <div className=" w-full mt-4">
            <img
              src={messageImg}
              className="rounded-xl sm:w-11/12 mx-auto "
              alt=""
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
