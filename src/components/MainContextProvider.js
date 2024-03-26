import React, { createContext, useContext, useState } from "react";
import dutchFortImg from "../images/dutchFort.png";
import kandyImg from "../images/Kandy.jpg";
import jaffnaBeachImg from "../images/jaffna-beachesOG.jpg";
import nuwaraImg from "../images/nuwara-eliya-highlights.jpg";
import polanaruwaImg from "../images/polannaruwa.jpg";
import ruwanImg from "../images/ruwan.png";
import trincoImg from "../images/tringo.jpg";
import sigiriyaImg from "../images/SIHIRIYA.jpg";
import elleImg from "../images/ELLE.jpg";
import mirissaImg from "../images/Mirissa.jpg";
import yalaParkImg from "../images/Yala.jpg";
import jaffnaImg from "../images/Jaffna.jpg";
import nallurImg from "../images/nallur-temple.jpg (2).jpg";
import top1Img from "../images/top1.jpg";
import top2Img from "../images/top2.jpg";
import beachImg from "../images/tropical-beach.jpg";

const DataContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [miniSearchBoxStatus, setminiSearchBoxStatus] = useState(false);
  const [selectedPalceIndex, setSelectedPalceIndex] = useState(0);
  const [selectedDistrictIndex, setSelectedDistrictIndex] = useState(0);
  const [featuredDestinations, setFeaturedDestinations] = useState([
    {
      name: "Nuwara-Eliya",
      imgage: nuwaraImg,
    },
    {
      name: "Kandy",
      imgage: kandyImg,
    },
    {
      name: "Galle",
      imgage: dutchFortImg,
    },
    {
      name: "Trincomalee",
      imgage: trincoImg,
    },
    {
      name: "Polonnaruwa",
      imgage: polanaruwaImg,
    },
    {
      name: "Jaffna",
      imgage: jaffnaBeachImg,
    },
    {
      name: "Anurathapura",
      imgage: ruwanImg,
    },
    {
      name: "Pasikudah",
      imgage: beachImg,
    },
    {
      name: "Nallur",
      imgage: nallurImg,
    },
  ]);
  const [popularity, setPopularity] = useState([
    { name: "Sigiriya", imgage: sigiriyaImg },
    { name: "Ella", imgage: elleImg },
    { name: "Dutch Fort", imgage: dutchFortImg },
    { name: "Mirissa", imgage: mirissaImg },
    { name: "Yala Park", imgage: yalaParkImg },
    { name: "Kandy", imgage: kandyImg },
    { name: "Jaffna", imgage: jaffnaImg },
    { name: "Nuwara", imgage: nuwaraImg },
    { name: "Trinco", imgage: trincoImg },
    { name: "Nallur Kovil", imgage: nallurImg },
    { name: "Puththalam", imgage: top1Img },
    { name: "Thalatha Maligha", imgage: top2Img },
    { name: "Pasikudah Beach", imgage: beachImg },
  ]);

  return (
    <DataContext.Provider
      value={{
        miniSearchBoxStatus,
        setminiSearchBoxStatus,
        featuredDestinations,
        setFeaturedDestinations,
        popularity,
        setPopularity,
        selectedPalceIndex,
        setSelectedPalceIndex,
        selectedDistrictIndex,
        setSelectedDistrictIndex,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
