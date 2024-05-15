import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { RxSquare } from "react-icons/rx";
import pointImg1 from "../../images/Point.png";
import pointImg2 from "../../images/Point-1.png";
import pointImg3 from "../../images/Point-2.png";
import pointImg4 from "../../images/Point-3.png";
import photoPngImg from "../../images/Photo.png";

export default function Demo() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  //demoData
  const [demoData, setDemoData] = useState([
    {
      img: pointImg1,
      name: "Develop Objective",
      desc: " DVestibulum lacinia arcu nulla- Class aptent taciti sociosqu litr torquent per conubia",
    },
    {
      img: pointImg2,
      name: "Determine Resource",
      desc: "Ontry to popular belief Lorom not simply random text has rot classical Latin litera",
    },
    {
      img: pointImg3,
      name: "Create A Timeline",
      desc: "There are many variations Ofen passages of Lorem Ipsum avaible majority have suffered",
    },
    {
      img: pointImg4,
      name: "Finalize Plan",
      desc: "Iten is a long established fact that a reader will be distracte by the readable content",
    },
  ]);
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } w-full bg-white pt-20 pb-10  `}
    >
      <div className=" mx-auto w-11/12 sm:w-10/12">
        <p className=" cursor-default font-prata px-5 text-xl w-full text-center lg:text-3xl">
          Eye Catching XStore Real Estate Demo
        </p>

        <div className=" pt-16 w-full gap-5 md:gap-10 grid grid-cols-2 md:grid-cols-4">
          {demoData.map((demo, index) => (
            <div key={index} className=" pb-5 sm:pb-0">
              <div className="cursor-default w-full items-center justify-center flex">
                <img src={demo.img} alt="" />
              </div>
              <p className="cursor-default font-prata mt-8 text-lg w-full text-center">
                {demo.name}
              </p>
              <p className=" cursor-default text-xs text-gray-400   px-5 mt-5 w-full text-center">
                {demo.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full py-8 mt-10 bg-[#078169]">
        <div className=" w-11/12 sm:w-10/12 mx-auto md:flex  justify-between items-center">
          <p className=" text-lg font-prata text-white pb-5 md:pb-0 text-center cursor-default">
            Gorgeous Home For Sale In Greenville
          </p>
          <div className="flex items-center justify-center gap-10 md:gap-5">
            <div className=" flex items-center justify-center gap-2">
              <img src={photoPngImg} alt="" />
              <div className=" text-white">
                <p className=" text-sm cursor-default">Martin Miller</p>
                <p className=" text-xs cursor-default">Our Agent</p>
              </div>
            </div>
            <div className=" px-4 py-2 bg-white rounded hover:bg-[#c0ddd8] cursor-pointer text-gray-600 flex gap-2 items-center justify-center">
              <RxSquare className=" size-3" />
              <p className=" text-sm">Discover More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
