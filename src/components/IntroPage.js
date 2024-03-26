import React from "react";
import SeachBox from "./intropageComponents/SearchBox";
import PhoneMap from "./intropageComponents/PhoneMap";
import Popularity from "./intropageComponents/Popularity";
import PlanA from "./intropageComponents/PlanA";
import Featured from "./intropageComponents/FeaturedDestinations";

export default function IntroPage() {
  return (
    <div className=" w-11/12 sm:w-10/12 lg:w-8/12 mx-auto mt-10 pt-16 ">
      <SeachBox />
      <PhoneMap />
      <Popularity />
      <PlanA />
      <Featured />
    </div>
  );
}
