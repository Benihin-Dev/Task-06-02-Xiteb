import React, { useState } from "react";
import clientImg1 from "../../images/Avatar.jpg";
import clientImg2 from "../../images/Avatar-1.jpg";
import qoutesImg from "../../images/quotes.png"; 

export default function ClientTestominial() {
  const [clientData, setClientData] = useState([
    {
      name: "JUDITH MCKINNEY",
      commment:
        "This is by far the best theme on Themeforest It adapts to a lo Of the plugins, and their customer support is great. I reallylove this theme!",
      img: clientImg1,
      location: "Seychelles",
    },
    {
      name: "HAROLD NGUYEN",
      commment:
        "As always a 5 star! i bought this theme the third orfourth time so farm really loving it. the new update from 6.0 is awesome and very funny.",
      img: clientImg2,
      location: "Syrian Arab Republic",
    },
  ]);
  return (
    <div className=" w-full  bg-[#ffffffe0]  relative overflow-hidden ">
      <div className=" w-11/12 sm:w-10/12 mx-auto py-16">
        <p className=" text-2xl w-full text-center font-prata cursor-default">
          {" "}
          Client's Testomonials
        </p>
        <p className=" text-sm text-gray-400 my-5 pb-5 w-full text-center cursor-default">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          delectus?
        </p>
        <div className=" sm:grid grid-cols-2 w-full items-center justify-center gap-5 space-y-3 sm:space-y-0">
          {clientData.map((data, index) => (
            <div
              key={index}
              className=" flex h-full relative cursor-pointer  gap-7 items-start justify-center p-5 rounded-[20px] bg-white shadow"
            >
              <img src={data.img} alt="" />
              <div className=" z-10">
                <p className="text-gray-500 text-[13px]">{data.commment}</p>
                <p className=" font-prata mt-2 text-sm">{data.name}</p>
                <p className=" text-sm text-gray-500  ">{data.location}</p>
              </div>
              <img
                src={qoutesImg}
                className=" size-20  text-4xl absolute top-0 right-5"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" absolute top-0 left-0 right-0 w-full h-screen -z-10">
        <img src="https://snapfolioprofilepics.s3.amazonaws.com/fa29adbeb0ff670cdfdfe61cb590e7c3.png" alt="" className=" object-cover h-full sm:w-full" />
      </div>
    </div>
  );
}
