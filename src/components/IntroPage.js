import React, { useState, useEffect } from "react";
import SeachBox from "./intropageComponents/SearchBox";
import PhoneMap from "./intropageComponents/PhoneMap";
import Popularity from "./intropageComponents/Popularity";
import PlanA from "./intropageComponents/PlanA";
import Featured from "./intropageComponents/FeaturedDestinations";
import { Element } from "react-scroll";

export default function IntroPage() {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    if (!isRendered) {
      window.scrollTo(0, 0);
      setIsRendered(true);
    }
  }, [isRendered]);
  return (
    <div className=" font-ubuntu w-11/12 sm:w-10/12 lg:w-8/12 mx-auto mt-10 pt-16 ">
      <Element name="searchBar">
        <SeachBox />
      </Element>
      <PhoneMap />
      <Popularity />
      <PlanA />
      <Featured />
    </div>
  );
}
