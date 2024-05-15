import React, { useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { BiMessage } from "react-icons/bi";
import blogImg1 from "../../images/Image_2-300x197.jpg";
import blogImg2 from "../../images/Image_6-300x197.jpg";
import blogImg3 from "../../images/Image_8-300x197.jpg";

export default function OurBlogs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  // blogData
  const [blogData, setBlogData] = useState([
    {
      img: blogImg1,
      name: "10 Quick Tips About Business",
      date: "June 8, 2021",
      desc: " There are variations of passages of Lorems Ipsums available, but then majority.",
    },
    {
      img: blogImg2,
      name: "Learn The Truth Real Estate",
      date: "June 8, 2021",
      desc: " It is long established fact that a reader will distracted by the readable content.",
    },
    {
      img: blogImg3,
      name: "Skills Learn In Real Estate",
      date: "June 8, 2021",
      desc: "There are variations of passages of Lorems Ipsums available, but then majority.",
    },
  ]);
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } w-full bg-[#f9f9f9] py-20`}
    >
      <div className=" w-11/12 sm:w-10/12 mx-auto">
        <p className=" text-2xl font-prata w-full text-center">Our Blog</p>
        <div className="  sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 sm:space-y-0 space-y-5">
          {/* blogData mapping */}
          {blogData.map((data, index) => (
            <div
              key={index}
              className=" rounded-lg  shadow-sm hover:shadow-md cursor-pointer overflow-hidden bg-white w-full"
            >
              <img src={data.img} className=" w-full" alt="" />
              <div className=" px-5 w-full">
                <p className=" mt-5 text-sm font-prata w-full text-center">
                  {data.name}
                </p>
                <div className=" flex w-full items-center gap-1 text-sm justify-center mb-4 text-[#a29f9f] mt-2">
                  <MdOutlineDateRange className=" size-5" />
                  <p>{data.date}</p>
                  <div className=" flex items-start justify-center">
                    <div className=" flex justify-center items-center">
                      <BiMessage className=" size-3" />{" "}
                      <p className=" text-xs">0</p>
                    </div>
                  </div>
                </div>
                <p className=" text-[#a29f9f]  text-sm text-center w-full pb-8">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
