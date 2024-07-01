import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import lodoImg from "../navBar/images/logo.png";

export default function MiddleFooterSection() {
  return (
    <div className=" w-full py-10 bg-[#ffffffa3]">
      <div className=" w-full  px-5 sm:px-0 sm:w-11/12 mx-auto   sm:flex items-start gap-10   lg:gap-16  justify-between ">
        <div className=" w-full sm:w-1/3  space-y-2">
          {" "}
          <div className="  w-2/5 sm:w-2/4">
            <img src={lodoImg} className=" w-full object-contain" alt="" />
          </div>
          <p className=" w-full leading-4 text-gray-900 cursor-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea
            quas debitis harum nisi ut tempora eius nulla provident voluptatum
            consectetur tempora eius nulla provident voluptatum
          </p>
        </div>
        <div className=" w-full sm:w-2/4 flex justify-between pt-5 gap-5 sm:pt-0 lg:px-8">
          <ul className=" text-gray-900">
            <li className=" font-bold pb-2 cursor-default">Customer Service</li>
            <li className="footerLink">
              My Account
            </li>
            <li className="footerLink">
              Help Center
            </li>
            <li className="footerLink">
              Track My Order
            </li>
            <li className="footerLink">
              Shipping & Returns
            </li>
            <li className="footerLink">
              Store Location
            </li>
          </ul>
          <ul className=" text-gray-900">
            <li className=" font-bold pb-2 cursor-default">Information</li>
            <li className="footerLink">
              About Us
            </li>
            <li className="footerLink">
              Legal Notice
            </li>
            <li className="footerLink">
              Customer Reviews
            </li>
            <li className="footerLink">
              Guides & Articles
            </li>
            <li className="footerLink">
              Coupon Codes
            </li>
          </ul>
        </div>
        <div className=" w-full sm:w-1/4 mt-5 sm:mt-0  cursor-default">
          <ul className=" space-y-2">
            <li className=" font-bold pb-2 cursor-default">Contact us</li>
            <li className=" flex items-start gap-3">
              <IoLocationOutline className=" text-[#ffad33] size-5" />
              <p className=" leading-4 text-gray-900">
                No 128, 2nd Cross, Batticaloa
              </p>
            </li>
            <li className=" flex items-start gap-3">
              <MdMailOutline className=" text-[#ffad33] size-4" />
              <p className=" pl-1 leading-4 text-gray-900">hello@sparex.lk</p>
            </li>
            <li className=" flex items-start gap-3">
              <FaPhoneAlt className=" text-[#ffad33] size-[15px]" />
              <p className=" pl-1 leading-4 text-gray-900">+94112345678</p>
            </li>
            <li className=" flex items-start gap-3">
              <MdOutlineWatchLater className=" text-[#ffad33] size-6" />
              <p className=" leading-4 text-gray-900">
                7 Days a week from 10 am to 6 pm
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
