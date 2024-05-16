import React, { useState, createContext, useContext } from "react";
import cartImg1 from "../../images/Image_1-300x197.jpg";
import cartImg2 from "../../images/Image_2-300x197.jpg";
import cartImg3 from "../../images/Image_4-300x197.jpg";

const MainDataContext = createContext();
export const MainContext = ({ children }) => {
  const [luxuryVillaData, setLuxuryVillaData] = useState([
    {
      name: "Historical Grand Family Villa Rio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fipisicing elit. Temporibus omnis iure blanditiis est, modi provim dolor, sit amet consectetur adipisicing elit. Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fipisicing elit. Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fipisicing elit. Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fugit aut rerum voluptatem assumenda, dicta consequatur quos voluptas vero qui?",
      img: [cartImg1, cartImg2, cartImg3, cartImg1, cartImg2, cartImg3],
      oldPrice: "$18,600.00",
      newPrice: "$16,500.00",
      rooms: { bedRoomCount: "7 Rooms", hallCount: "3", kitchenCount: "2" },
      squareFeet: 3226,
      location: "89th St, London",
    },
    {
      name: "Luxury Villa In Rego Park",
      desc: " dicta consequatur quos voluptas vero qui? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fipisilanditiis est, modi provident esse veniam fugiat, velit fipisicing elit. Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit m dolor, sit amet consectetur adipisicing elit. Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fipisicing elit. Temporibus omnis iure blanditiis est, modi provifugit aut rerum voluptatem assumenda,",
      img: [cartImg2, cartImg3, cartImg1, cartImg2, cartImg3, cartImg1],
      oldPrice: null,
      newPrice: "$125,500.00",
      rooms: { bedRoomCount: "8 Rooms", hallCount: "3", kitchenCount: "3" },
      squareFeet: 2256,
      location: "54th St, London",
    },
    {
      name: "Boutique Space Greenville",
      desc: "Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fipisicing elit. Tem dolor, sit amet consectetur adipisicing elit. Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fipisicing elit. Temporibus omnis iure blanditiis est, modi provimporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fipisicing elit. Temporibus omnis iure blanditiis est, modi provident esse veniam fugiat, velit fugit aut rerum voluptatem assumenda, dicta consequatur quos voluptas vero qui?",
      img: [cartImg3, cartImg1, cartImg2, cartImg3, cartImg1, cartImg2],
      oldPrice: null,
      newPrice: "$115,500.00",
      rooms: { bedRoomCount: "6 Rooms", hallCount: "3", kitchenCount: "2" },
      squareFeet: 4556,
      location: "81th St, London",
    },
  ]);

  const [
    indexOfSelectedVillaForDetailedView,
    setIndexOfSelectedVillaForDetailedView,
  ] = useState(0);

  return (
    <MainDataContext.Provider
      value={{
        indexOfSelectedVillaForDetailedView,
        setIndexOfSelectedVillaForDetailedView,
        luxuryVillaData,
        setLuxuryVillaData,
      }}
    >
      {children}
    </MainDataContext.Provider>
  );
};

export const UseMainDataContext = () => {
  return useContext(MainDataContext);
};
