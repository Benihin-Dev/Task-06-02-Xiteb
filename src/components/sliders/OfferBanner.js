import React, { useState } from "react";
import Slider from "react-slick";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OfferBanner() {
    const [settings, setSettings] = useState({
        // dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      });
  return (
    <div className=" w-full overflow-hidden h-32 sm:h-52 pt-12 sm:pt-[56px]">
    <Slider {...settings}>
      <Slide>
        <img
          src="https://www.easemytrip.com/images/offer-img/flash-deal-banner-27mar24.png"
          alt=""
          className=" object-cover"
        />
      </Slide>
      <Slide>
        <img
          src="https://ae01.alicdn.com/kf/HTB1i.4Znb1YBuNjSsze761blFXak.png"
          alt=""
        />
      </Slide>
      <Slide>
        <img
          src="https://www.gizmochina.com/wp-content/uploads/2019/09/BG-DZ-1920X500-linweiguang-132-1024x267.jpg"
          alt=""
        />
      </Slide>
    </Slider>
  </div>
  )
}
