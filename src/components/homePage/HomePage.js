import React from "react";
import Banner from "../banner/Banner";
import Finder from "../partsFinder&Sales/Finder";
import BgImage from "../bgImage/BgImage";
import FlashSale from "../partsFinder&Sales/FlashSale";
import SearchSection from "../searchByPartSection/SearchSection";
import NewArrivalProductGrid from "../productGridView/NewArrivalProductGrid";
import Testimonial from "../testimonial/Testimonial";
import Footer from "../footer/Footer";
import AboutUs from "../aboutUs/AboutUs";

export default function HomePage() {
  return (
    <div>
      <BgImage />
      <Banner />
      <Finder />
      <FlashSale />
      <SearchSection />
      <NewArrivalProductGrid />
      <Testimonial />
      <AboutUs />
      <Footer />
    </div>
  );
}
