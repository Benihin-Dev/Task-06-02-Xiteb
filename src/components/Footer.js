import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { TfiYoutube } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { TfiTwitter } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";

export default function Footer() {
  return (
    <div className=" w-full  sm:w-10/12 lg:w-8/12 px-5 sm:px-2 mt-16 mb-10 sm:mt-5 mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 border-t pt-5">
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
      <div className=" sm:col-span-2">
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
  );
}
