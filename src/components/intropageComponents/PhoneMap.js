import React, { useEffect } from "react";
import mapImg from "../../images/frontMap.png";

export default function PhoneMap() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      const element = document.querySelector(".mapComponent");

      element.classList.remove("slideFromRight");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <div className="mapComponent slideFromRight w-full sm:w-10/12 md:w-8/12 mx-auto mt-10 px-2 sm:px-5 text-sm border h-44 rounded-2xl bg-[#7bad90] relative overflow-hidden">
      <p className=" absolute bottom-8 text-white leading-4">
        Search with <br /> Embed Location Map
      </p>
      <img
        onClick={() => {
          console.log("Clicked");
        }}
        src={mapImg}
        alt=""
        className=" absolute top-0 -right-2 sm:right-10 md:right-20 h-full"
      />
    </div>
  );
}
