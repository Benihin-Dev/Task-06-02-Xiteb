import React, { useEffect } from "react";
import { useData } from "./MainContextProvider";

export default function MiniSearchBtn() {
  const { miniSearchBoxStatus, setminiSearchBoxStatus } = useData();
  useEffect(() => {
    const timerId = setTimeout(() => {
      const element = document.querySelector(".miniSearchBoxComponent");

      element.classList.remove("slideDown");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <button
      className={` ${
        miniSearchBoxStatus === false ? "hidden" : ""
      } miniSearchBoxComponent slideDown rounded-full px-4 shadow hover:scale-[1.01] hover:border-gray-400 duration-200 bg-[#ffffffed] border`}
    >
      Search
    </button>
  );
}
