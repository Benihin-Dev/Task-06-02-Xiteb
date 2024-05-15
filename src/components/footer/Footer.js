import React, { useState } from "react";
import "./Footer.css";
import footerImg from "../../images/Payment.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  //footer data
  const [footerLinks, setFooterLinks] = useState([
    [
      { name: "Popular Search", link: "www.example.com" },
      { name: "Apartment For Rent", link: "www.example.com" },
      { name: "Offices For Buy", link: "www.example.com" },
      { name: "Offices For Rent", link: "www.example.com" },
      { name: "Townhome For Rent", link: "www.example.com" },
      { name: "Townhorne For Buy", link: "www.example.com" },
      { name: "Shop For Rent", link: "www.example.com" },
    ],
    [
      { name: "Homepress Market", link: "www.example.com" },
      { name: "Las Vegas Office", link: "www.example.com" },
      { name: "Sacramento Townhome", link: "www.example.com" },
      { name: "New York Apartment", link: "www.example.com" },
      { name: "Philadelphia Office", link: "www.example.com" },
      { name: "London Townhome", link: "www.example.com" },
      { name: "LOS Angeles Apartment", link: "www.example.com" },
    ],
    [
      { name: "Quick Links", link: "www.example.com" },
      { name: "Pricing Plans", link: "www.example.com" },
      { name: "Xstore Services", link: "www.example.com" },
      { name: "About US", link: "www.example.com" },
      { name: "Terms & Condition", link: "www.example.com" },
      { name: "Privacy Policy", link: "www.example.com" },
      { name: "Get Rewarded", link: "www.example.com" },
      { name: "Contact us", link: "www.example.com" },
    ],
  ]);
  return (
    <div className=" w-full pt-20 pb-5 bg-[#333333]">
      <div className=" w-11/12 sm:w-10/12 md:flex items-center gap-10 justify-between mx-auto">
        <div className=" md:w-8/12 grid grid-cols-2 gap-5 md:grid-cols-3">
          {footerLinks.map((section, index) => (
            <div key={index}>
              {section.map((link, i) => (
                <div key={i} className="">
                  {i === 0 ? (
                    <p className=" font-prata pb-5 text-gray-100 cursor-default">
                      {link.name}
                    </p>
                  ) : (
                    <a
                      href={link.link}
                      className="text-gray-300  hover:text-[#078169] duration-200"
                    >
                      <p className=" text-xs pb-3  cursor-pointer">
                        {link.name}
                      </p>
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className=" mt-10 md:mt-0 md:w-4/12">
          <p className=" font-prata text-gray-100 cursor-default">
            Sign Up For Newsletter
          </p>
          <p className=" text-sm text-gray-200 mt-5 cursor-default">
            Enter your email bellow to receive a $30 coupon, special offters,
            excusive discounts and moro!
          </p>
          <div className=" relative w-full mt-5 bg-white text-gray-700 py-2 flex justify-between px-5 items-center">
            <input
              type="text"
              className=" bg-transparent outline-none w-full text-sm"
              placeholder="Your email address"
            />
            <p className=" absolute top-3 right-0 px-2 bg-white w-fit text-xs cursor-pointer">
              SIGN UP
            </p>
          </div>
          <p className=" font-prata text-sm py-5 text-gray-100 cursor-default">
            Follow Us
          </p>
          {/* socila links */}
          <div className=" flex w-full items-center gap-2">
            <FaFacebookF className="footerSocilaMediaLink " />
            <RiTwitterXFill className=" footerSocilaMediaLink" />
            <LuInstagram className=" footerSocilaMediaLink" />
            <FaWhatsapp className=" footerSocilaMediaLink size-[18px]" />
            <FaYoutube className=" footerSocilaMediaLink size-[17px]" />
          </div>
        </div>
      </div>
      <div className="w-11/12 sm:w-10/12 mx-auto">
        {/* footer navLinks */}
        <ul className=" hidden sm:flex  justify-center gap-3 mt-10">
          <Link
            to="home-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            <li className=" footerNavLink">Home</li>
          </Link>
          <Link
            to="blog-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            <li className=" footerNavLink">Blog</li>
          </Link>
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            <li className=" footerNavLink">About Us</li>
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            <li className=" footerNavLink">Contact Us</li>
          </Link>
          <Link
            to="properties-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            <li className=" footerNavLink">Properties</li>
          </Link>

          <li className=" footerNavLink">Wishlist</li>
        </ul>
        <p className=" w-full border-b border-gray-300 pb-10"></p>
        <div className=" w-full sm:flex items-end justify-between">
          <img src={footerImg} className=" mt-2 block sm:hidden" alt="" />

          <p className=" text-sm mt-2 text-gray-400 cursor-default">
            Copyright 2024 <span className="text-white">R-State.</span> Solution
            By <span className="text-white">R-State.</span>
          </p>
          <img src={footerImg} className=" mt-2 sm:block hidden" alt="" />
        </div>
      </div>
    </div>
  );
}
