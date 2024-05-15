import React, { useState } from "react";
import "./ContactForm.css";
import { IoIosArrowDown } from "react-icons/io";

export default function ContactForm() {
  //I am selection input
  const [iamA, setIamA] = useState("Select I'm A ...");
  const [iAmListState, setIAmListState] = useState(false);
  const [iAmData, setIAmData] = useState([
    "Farmor",
    "FisherMan",
    "DailyWage",
    "Doctor",
    "Driver",
    "Engineer",
  ]);

  //propertyType selection input
  const [propertyType, setPropertyType] = useState("Select Type..");
  const [propertyTypeState, setPropertyTypeState] = useState(false);
  const [propertyTypeData, setPropertyTypeData] = useState([
    "Property Type 01",
    "Property Type 02",
    "Property Type 03",
    "Property Type 04",
    "Property Type 05",
    "Property Type 06",
  ]);

  //city selection input
  const [city, setCity] = useState("Select City..");
  const [cityListState, setCityListState] = useState(false);
  const [cityData, setCityData] = useState([
    "Colombo",
    "Batticaloa",
    "Jaffna",
    "Kandy",
    "Galle",
    "Puththalam",
  ]);

  //budget selection input
  const [budget, setBudget] = useState("Your Budget..");
  const [budgetListState, setBudgetListState] = useState(false);
  const [budgetData, setBudgetData] = useState([
    "$10,000 - $20,000",
    "$20,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $200,000",
    "$20,000 - $500,000",
    "$500,000 - $1000,000",
  ]);

  //bedCount selection input
  const [bedCount, setBedCount] = useState("Number of Beds..");
  const [bedCountListState, setBedCountListState] = useState(false);
  const [bedCountData, setBedCountData] = useState([
    "Just One",
    "Two",
    "Three",
    "Four",
    "Five",
    "More then Five",
  ]);

  //minimumSize selection input
  const [minimumSize, setMinimumSize] = useState("Minimum Size (Sq Ft)");
  const [minimumSizeListState, setMinimumSizeListState] = useState(false);
  const [minimumSizeData, setMinimumSizeData] = useState([
    "10 Square Feet ",
    "20 Square Feet",
    "50 Square Feet",
    "100 Square Feet",
    "200 Square Feet",
    "500 Square Feet",
  ]);
  return (
    <div className="w-full bg-[#178871e8] text-white  relative overflow-hidden">
      <div className=" py-10 pb-20 w-11/12 sm:w-9/12 md:w-7/12 mx-auto">
        <p className=" text-2xl font-prata w-full text-center">
          Requests Your Property Valuation
        </p>
        <p className=" text-sm pt-8 pb-5">Personal Information:</p>
        <form action="#" className=" text-sm w-full space-y-3">
          {/* I am input */}
          <div
            onClick={() => {
              setIAmListState(!iAmListState);
            }}
            className="selectionBtn"
          >
            {" "}
            <input
              type="text"
              className="selectionBtnInput "
              value={iamA}
              readOnly
            />
            <IoIosArrowDown />
            {iAmListState && (
              <div className=" absolute top-[95%] left-0 right-0 bg-[#fffffff2] border text-black z-20">
                {iAmData.map((data, index) => (
                  <p
                    onClick={(e) => {
                      setIamA(e.target.innerHTML);
                    }}
                    key={index}
                    className=" selectionBtnDropDownList"
                  >
                    {data}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className=" w-full gap-3 sm:flex items-center justify-center space-y-3 sm:space-y-0">
            {/* name input */}
            <input
              type="text"
              name="name"
              placeholder=" Your Name"
              className="  normalInput"
            />
            {/* email input */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="   normalInput"
            />
          </div>
          <p className=" text-sm pt-3 pb-2">Property Information:</p>
          {/* Property type input */}
          <div
            onClick={() => {
              setPropertyTypeState(!propertyTypeState);
            }}
            className="selectionBtn"
          >
            {" "}
            <input
              type="text"
              className="selectionBtnInput "
              value={propertyType}
              readOnly
            />
            <IoIosArrowDown />
            {propertyTypeState && (
              <div className=" selectionBtnDropDownListContainer customScrollBar">
                {propertyTypeData.map((data, index) => (
                  <p
                    onClick={(e) => {
                      setPropertyType(e.target.innerHTML);
                    }}
                    key={index}
                    className=" selectionBtnDropDownList"
                  >
                    {data}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className=" twoSelectionBtn">
            {/* city input */}
            <div
              onClick={() => {
                setCityListState(!cityListState);
              }}
              className="selectionBtn"
            >
              {" "}
              <input
                type="text"
                className="selectionBtnInput "
                value={city}
                readOnly
              />
              <IoIosArrowDown />
              {cityListState && (
                <div className=" selectionBtnDropDownListContainer customScrollBar">
                  {cityData.map((data, index) => (
                    <p
                      onClick={(e) => {
                        setCity(e.target.innerHTML);
                      }}
                      key={index}
                      className=" selectionBtnDropDownList"
                    >
                      {data}
                    </p>
                  ))}
                </div>
              )}
            </div>
            {/* budget input */}
            <div
              onClick={() => {
                setBudgetListState(!budgetListState);
              }}
              className="selectionBtn"
            >
              {" "}
              <input
                type="text"
                className="selectionBtnInput "
                value={budget}
                readOnly
              />
              <IoIosArrowDown />
              {budgetListState && (
                <div className=" selectionBtnDropDownListContainer  customScrollBar">
                  {budgetData.map((data, index) => (
                    <p
                      onClick={(e) => {
                        setBudget(e.target.innerHTML);
                      }}
                      key={index}
                      className=" selectionBtnDropDownList"
                    >
                      {data}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className=" twoSelectionBtn">
            {/*bedCount input */}
            <div
              onClick={() => {
                setBedCountListState(!bedCountListState);
              }}
              className="selectionBtn"
            >
              {" "}
              <input
                type="text"
                className="selectionBtnInput "
                value={bedCount}
                readOnly
              />
              <IoIosArrowDown />
              {bedCountListState && (
                <div className=" selectionBtnDropDownListContainer customScrollBar">
                  {bedCountData.map((data, index) => (
                    <p
                      onClick={(e) => {
                        setBedCount(e.target.innerHTML);
                      }}
                      key={index}
                      className=" selectionBtnDropDownList"
                    >
                      {data}
                    </p>
                  ))}
                </div>
              )}
            </div>
            {/* minimumSize input */}
            <div
              onClick={() => {
                setMinimumSizeListState(!minimumSizeListState);
              }}
              className="selectionBtn"
            >
              {" "}
              <input
                type="text"
                className="selectionBtnInput "
                value={minimumSize}
                readOnly
              />
              <IoIosArrowDown />
              {minimumSizeListState && (
                <div className=" selectionBtnDropDownListContainer customScrollBar">
                  {minimumSizeData.map((data, index) => (
                    <p
                      onClick={(e) => {
                        setMinimumSize(e.target.innerHTML);
                      }}
                      key={index}
                      className=" selectionBtnDropDownList"
                    >
                      {data}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className=" w-full text-black py-2 rounded bg-white hover:bg-gray-300 duration-200">
            Submit Inquiry
          </button>
        </form>
      </div>
      <div className=" absolute top-0 left-0 right-0 w-full h-screen -z-10">
        <img
          src="https://hometown.lk/wp-content/uploads/2020/07/house_nice_2-12-1-1024x682.jpg"
          alt=""
          className=" object-cover h-full sm:w-full"
        />
      </div>
    </div>
  );
}
