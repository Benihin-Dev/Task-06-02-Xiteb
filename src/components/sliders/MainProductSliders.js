import React, { useState } from "react";
import { useDataContext } from "../MainDataContext";
import SliderForProducts from "./SliderForProducts";

export default function MainProductSliders() {
  const { products } = useDataContext();
  const [sliderData, setSliderData] = useState({
    dataForMobilePhones: {
      title: {
        quote: " Your Next Mobile Adventure Starts Here!",
        color: "text-[#252525]",
      },
      subTitle: {
        quote:
          "  From crystal-clear cameras to lightning-fast processors, our newest mobile phones are designed to enhance your life. Find your perfect match and take on the world with confidence!",
        color: "text-[#9571f4]",
      },
      data: products.mobilePhones,
      autoplaySpeed: 7000,
    },
    dataForMobileAccessories: {
      title: {
        quote: "Complete Your Mobile Experience!",
        color: "text-[#2bb6a8]",
      },
      subTitle: {
        quote:
          "Enhance your device with our premium selection of mobile accessories. From stylish cases to high-performance chargers, find everything you need to make the most of your mobile.",
        color: "text-[#8c8c8c]",
      },
      data: products.mobileAccessories,
      autoplaySpeed: 5500,
    },
    dataForKeyBoardPhones: {
      title: {
        quote: "Timeless Typing, Modern Connectivity!",
        color: "text-[#f9672d]",
      },
      subTitle: {
        quote:
          "Embrace the best of both worlds with our keyboard phones. Enjoy the tactile feedback of a real keyboard while staying connected with modern features and technology.",
        color: "text-[#2e2d2d]",
      },
      data: products.keyBoardPhones,
      autoplaySpeed: 4000,
    },
  });
  return (
    <>
      <SliderForProducts data={sliderData.dataForMobilePhones} />
      <SliderForProducts data={sliderData.dataForMobileAccessories} />
      <SliderForProducts data={sliderData.dataForKeyBoardPhones} />
    </>
  );
}
