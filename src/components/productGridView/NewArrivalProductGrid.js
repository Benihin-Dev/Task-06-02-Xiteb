import React, { useState } from "react";
import Grid from "./Grid";

export default function NewArrivalProductGrid() {
  const [showAllProductState, setShowAllProductState] = useState(false);
  const newProducts = [
    {
      name: "BMW Steering wheel",
      Image:
        "https://revisify.co.uk/cdn/shop/files/40C603DA9768739B0166CD3686BB1E11_115384bd-3223-40e7-8238-420ba56dc1ed.png?v=1705853963",
      rating: 4,
      price: 1230,
      salePrice: 1150,
      sale: true,
      desc: "BMW 1 2 3 4 SERIES M SPORT ALCANTARA LEATHER STEERING WHEEL AND AIRBAG",
    },
    {
      name: "OPEL Head Ligths ",
      Image:
        "https://cdn.autoteiledirekt.de/thumb?dynamic=generic_icons&name=3175&mode=5",
      rating: 3,
      price: 2540,
      salePrice: 2100,
      sale: false,
      desc: "Headlights for OPEL Insignia A Sports Tourer (G09) 1.4 (35) 2011-2017 Petrol 140hp B 14 NET",
    },
    {
      name: "GT Seat ",
      Image:
        "https://nextlevelracing.com/wp-content/uploads/2021/01/gt_seat_add_on_gallery_1.png",
      rating: 3,
      price: 1030,
      salePrice: 1000,
      sale: true,
      desc: "GTSeat Add On - Next Level Racing",
    },
    {
      name: "Front Brake Kit",
      Image: "https://leedbrakes.com/images/F143745065.png",
      rating: 5,
      price: 330,
      salePrice: 2510,
      sale: false,
      desc: "Chevrolet Power Front Disc Brake Kit with Red Calipers & Rotors",
    },
    {
      name: "Pink Sports Rim",
      Image:
        "https://images.iconfigurators.app/images/wheels/med/SIX_CANDY_PINK_GLOSS_CLR_A1_300.png",
      rating: 4,
      price: 7230,
      salePrice: 6350,
      sale: true,
      desc: "20 inch Wheels for Packages for Car and CUV / Classic / Luxury / Sports Car / Exotic",
    },
    {
      name: "Back LED Lights",
      Image: "https://cld.partsimg.com/image/upload/images/set-repc730169_1",
      rating: 3,
      price: 930,
      salePrice: 750,
      sale: false,
      desc: " Blackout Tail Lights - In The Garage with CarParts.co ",
    },
    {
      name: "Air Filters",
      Image:
        "https://www.maicsonecutuning.com/wp-content/uploads/2020/11/Open-Air-filter-black-top.png",
      rating: 3,
      price: 5000,
      salePrice: 4520,
      sale: true,
      desc: "Does a Performance Air Filter Add Horsepower? - Turborevs",
    },
    {
      name: "Car Battery",
      Image:
        "https://cdn.shopify.com/s/files/1/0615/7982/1304/files/motolite_champion.png?v=1687319401",
      rating: 5,
      price: 5110,
      salePrice: 4950,
      sale: true,
      desc: "Batteries - Batteries - Bosch Auto Parts",
    },
    {
      name: "Engin Oil",
      Image:
        "https://www.valvolineglobal.com/496d95/globalassets/vcom/product%20detail%20pages/hybrid/us_898664_888414_hybrid_beauty_5qt_1qt_group.png",
      rating: 5,
      price: 2830,
      salePrice: 2050,
      sale: true,
      desc: "Hybrid Vehicle Full Synthetic 0W-20 Motor Oil - Valvoline™ Global",
    },
    {
      name: "Car Generator",
      Image:
        "https://www.valeo.com/wp-content/uploads/2023/06/Copy-of-2015_PES_istars_HD_Leaders.png",
      rating: 3,
      price: 630,
      salePrice: 524,
      sale: true,
      desc: "Alternator & Starter Repair Services | Goodyear Auto Service",
    },
    {
      name: "NGK Spark Plugs",
      Image:
        "https://www.ngk.com.au/wp-content/uploads/2016/09/spark_plugs2.png",
      rating: 4,
      price: 1030,
      salePrice: 950,
      sale: true,
      desc: "Spark Plugs - NGK Spark Plugs Australia | Iridium Spark Plugs | Glow Plugs",
    },
    {
      name: "Grip Tiers",
      Image:
        "https://png.pngtree.com/png-clipart/20210502/original/pngtree-model-truck-entertainment-tire-png-image_6262846.png",
      rating: 2,
      price: 1500,
      salePrice: 1330,
      sale: true,
      desc: "Model Truck Entertainment Tire, Service, Parts, Model PNG Transparent Image and Clipart",
    },
    {
      name: "Shock Absorber",
      Image:
        "https://scarletracing.com/wp-content/uploads/2023/09/Untitled-4-2-1024x1024-1.png",
      rating: 4,
      price: 2530,
      salePrice: 2250,
      sale: false,
      desc: "Explore FOX Shocks by Series | FOX",
    },

    {
      name: "Red Sports Rim",
      Image: "https://i.ebayimg.com/images/g/rHUAAOSwg7pcerie/s-l1200.webp",
      rating: 4,
      price: 7030,
      salePrice: 5950,
      sale: true,
      desc: "Spark Plugs - NGK Spark Plugs Australia | Iridium Spark Plugs | Glow Plugs",
    },
  ];
  const limitedProducts = newProducts.slice(0, 5);

  return (
    <div className=" bg-gray-50 py-16">
      <div className=" px-5 sm:px-0 w-full sm:w-11/12 mx-auto">
        <p className=" w-full text-center text-3xl">New Arrival Parts</p>
        <p className=" text-gray-400 text-sm w-full text-center sm:w-2/3 mx-auto">
          Discover the latest additions to our collection with our brand-new
          arrivals, handpicked just for you.
        </p>
        {!showAllProductState && (
          <>
            <Grid data={limitedProducts} />
            <div className=" flex items-center justify-center">
              <p
                onClick={() => {
                  setShowAllProductState(!showAllProductState);
                }}
                className=" duration-200 w-full text-center sm:w-fit px-16 hover:text-gray-800 hover:bg-[#ebd31f] font-rajdhani cursor-pointer bg-[#f3de41]   py-2 sm:py-1 border mt-5"
              >
                Show All
              </p>
            </div>
          </>
        )}
        {showAllProductState && (
          <>
            <div className=" w-full overflow-hidden">
              <Grid data={newProducts} />
            </div>
            <div className=" flex items-center justify-center">
              <p
                onClick={() => {
                  setShowAllProductState(!showAllProductState);
                }}
                className=" duration-200 w-full text-center sm:w-fit px-16 hover:text-gray-800 hover:bg-[#ebd31f] font-rajdhani cursor-pointer bg-[#f3de41]   py-2 sm:py-1 border mt-5"
              >
                Hide
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
