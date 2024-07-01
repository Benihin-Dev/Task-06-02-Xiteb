import React from "react";
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function TopFooterSection() {
  return (
    <div className=" w-full py-8 bg-[#363636ca]">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto sm:flex items-center gap-10 space-y-3 sm:space-y-0  justify-between">
        <div className="md:flex  items-center justify-center sm:gap-10 ">
          <div className=" flex items-center  pb-3 sm:pb-0 w-full sm:w-fit gap-4 text-[#ffad33]">
            <div className=" socialMedia">
              <FaFacebookF />
            </div>
            <div className=" socialMedia">
              <FaInstagram />
            </div>
            <div className=" socialMedia">
              <FaXTwitter />
            </div>
            <div className=" socialMedia">
              <FaYoutube />
            </div>
          </div>
          <p className=" w-10/12 text-lg leading-5 text-white sm:pr-16">
            Sign up for newsletter & get{" "}
            <span className=" text-[#ffad33]">25% OFF</span> for first order
          </p>
        </div>
        <div className="  w-10/12 sm:w-full md:w-1/3 flex items-center">
          <div className=" w-full text-sm  ">
            <input
              type="text"
              placeholder="Enter your mail"
              className=" outline-none py-2 w-4/6 bg-indigo-50 px-5"
            />
            <button className=" w-2/6 text-white bg-[#38a9d6] py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
