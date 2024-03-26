import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { MdArrowForwardIos } from "react-icons/md";
import sigiriyaImg from "../../images/SIHIRIYA.jpg";
import elleImg from "../../images/ELLE.jpg";
import dutchFortImg from "../../images/dutchFort.png";
import mirissaImg from "../../images/Mirissa.jpg";
import yalaParkImg from "../../images/Yala.jpg";
import kandyImg from "../../images/Kandy.jpg";
import jaffnaImg from "../../images/Jaffna.jpg";
import nallurImg from "../../images/nallur-temple.jpg (2).jpg";
import nuwaraImg from "../../images/nuwara-eliya-highlights.jpg";
import trincoImg from "../../images/tringo.jpg";
import top1Img from "../../images/top1.jpg";
import top2Img from "../../images/top2.jpg";
import beachImg from "../../images/tropical-beach.jpg";

export default function Popularity() {
  const [popularity, setPopularity] = useState([
    { name: "Sigiriya", imgage: sigiriyaImg },
    { name: "Ella", imgage: elleImg },
    { name: "Dutch Fort", imgage: dutchFortImg },
    { name: "Mirissa", imgage: mirissaImg },
    { name: "Yala Park", imgage: yalaParkImg },
    { name: "Kandy", imgage: kandyImg },
    { name: "Jaffna", imgage: jaffnaImg },
    { name: "Nuwara", imgage: nuwaraImg },
    { name: "Trinco", imgage: trincoImg },
    { name: "Nallur Kovil", imgage: nallurImg },
    { name: "Puththalam", imgage: top1Img },
    { name: "Thalatha Maligha", imgage: top2Img },
    { name: "Pasikudah Beach", imgage: beachImg },
  ]);
  const [xAxisPositionForPopularity, setXAxisPositionForPopularity] =
    useState(0);
  var position = "translate-x-[" + xAxisPositionForPopularity + "px]";
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } mt-12 relative `}
    >
      <h1 className=" font-bold sm:px-5 ">Popularity Attractions</h1>
      <div className="relative overflow-x-scroll overflow-y-hidden custom h-52">
        <div className={` absolute top-2 gap-4 flex px-4 ${position}`}>
          {popularity.map((place, index) => (
            <div id={index} className=" w-52">
              <img
                src={place.imgage}
                alt=""
                className="h-36 rounded-md overflow-hidden shadow-lg hover:scale-[1.02]  duration-200 hover:shadow-[#b2b3b6]"
              />
              <p className=" z-20 pt-1 font-[400]">{place.name}</p>
            </div>
          ))}
        </div>
      </div>
      <MdArrowForwardIos
        onClick={() => {
          setXAxisPositionForPopularity(xAxisPositionForPopularity - 8); // Adjust the value as needed
        }}
        className="absolute bg-gray-50 border hover:bg-gray-200 hover:border-gray-600 hover:scale-105 duration-300 top-[38%] right-1 p-1 rounded-full z-10 size-6"
      />
    </div>
  );
}
