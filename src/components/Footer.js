import React, { useState } from "react";
import { TfiFacebook } from "react-icons/tfi";
import { TfiYoutube } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { TfiTwitter } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Footer() {
  const [languages, setLanguages] = useState([
    "English",
    "தமிழ்",
    "සිංහල",
    "español",
    "русский",
    "français",
    "汉语",
    "العربية",
    "বাংলা",
    "हिन्दी",
    "português",
  ]);
  const [languageShowState, setLanguageShowState] = useState(false);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  return (
    <div className=" w-full  sm:w-10/12 lg:w-8/12 px-5 sm:px-2 mt-16 mb-10 sm:mt-5 mx-auto border-t pt-5">
      <div className="  flex  items-center mb-1 justify-end">
        <div className=" text-gray-700 relative text-sm py-[3px] flex border gap-1 items-center px-5 rounded shadow-sm hover:shadow-md hover:border-gray-300 duration-200">
          <button
            onClick={() => {
              setLanguageShowState(!languageShowState);
            }}
          >
            {languages[selectedLanguageIndex]}
          </button>
          <IoMdArrowDropdown />
          {languageShowState && (
            <div className=" absolute w-full h-28 bg-white top-[105%] border left-0 overflow-y-scroll custom border-b-2">
              {languages.map((language, index) => (
                <p
                  onClick={() => {
                    setSelectedLanguageIndex(index);
                  }}
                  key={index}
                  className=" cursor-pointer w-full pt-1 border-b hover:bg-gray-50 text-sm pl-3"
                >
                  {language}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className=" w-full  grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 ">
        <div>
          <p className=" font-medium text-[#7bad90] ">Corporate information</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>Nearest Hotel & Resorts</p>
            </a>
            <a href="https://nothing.com">
              <p>Join Other Group</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-[#7bad90] ">News and Awards</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>News</p>
            </a>
            <a href="https://nothing.com">
              <p>Awards</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-[#7bad90] ">
            Data Privacy & Security Policy
          </p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>Terms & Conditions</p>
            </a>
            <a href="https://nothing.com">
              <p>Privacy Statement</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-[#7bad90] ">Blogs</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>TRIPLanka Ublog</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-[#7bad90] ">Corporate Governance</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>CSR</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-[#7bad90] ;">Get in Touch</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>info@triplanka.com</p>
            </a>
            <a href="https://nothing.com">
              <p>Urgent Contact Information</p>
            </a>
          </div>
        </div>
        <div>
          <p className=" font-medium text-[#7bad90] ;">Careers</p>
          <div className=" text-xs mt-2">
            <a href="https://nothing.com">
              <p>Careers</p>
            </a>
          </div>
        </div>
        <div className="">
          <p className=" font-medium text-[#7bad90] ;">Follow Us</p>
          <div className=" text-xs mt-2 flex gap-3 text-gray-400 ">
            <a href="https://nothing.com">
              <TfiFacebook className="hover:text-[#7bad90] ; size-4" />
            </a>
            <a href="https://nothing.com">
              <TfiTwitter className="hover:text-[#7bad90] ;  size-4" />
            </a>
            <a href="https://nothing.com">
              <TfiLinkedin className="hover:text-[#7bad90] ;  size-4" />
            </a>
            <a href="https://nothing.com">
              <TfiInstagram className="hover:text-[#7bad90] ;  size-4" />
            </a>
            <a href="https://nothing.com">
              <TfiYoutube className="hover:text-[#7bad90] ;  size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
