import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import ProductCreate from "./Product/ProductCreate";
import CategoryCreate from "./CategoryCreate";
import CustomerCreate from "./CustomerCreate";

export default function MainPanel() {
  const [activeSection, setActiveSection] = useState("product");

  return (
    <div className=" w-full">
      <div className=" fixed h-12 w-full z-20 bg-blue-500">
        <p className=" w-full text-center pt-2 text-white">
          Lorem, ipsum dolor. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className=" pt-20  sm:px-5 bg-[#f2f6fb] w-full grid grid-cols-3 sm:grid-cols-5  border-b-2 border-[#f2f6fb]">
        <div
          onClick={() => {
            setActiveSection("category");
          }}
          className={`${
            activeSection === "category" ? "bg-[#f2f6fb]" : " bg-white"
          } px-1 sm:px-5 py-6 w-full border-r border-gray-50 flex gap-2 cursor-pointer`}
        >
          <p className=" text-blue-600 font-bold">1.</p>
          <div>
            <p className=" text-sm sm:text-base">Categories</p>
            <div className=" flex gap-1 items-end">
              <TbEdit className=" text-gray-400" />
              <p className=" hidden sm:block  text-sm text-gray-400 leading-3">
                Edit Details
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setActiveSection("product");
          }}
          className={`${
            activeSection === "product" ? "bg-[#f2f6fb]" : " bg-white"
          } px-1 sm:px-5 py-6 w-full border-r border-gray-50 flex gap-2 cursor-pointer`}
        >
          <p className=" text-blue-600 font-bold">2.</p>
          <div>
            <p className=" text-sm sm:text-base">Products</p>
            <div className=" flex gap-1 items-end">
              <TbEdit className=" text-gray-400" />
              <p className=" hidden sm:block  text-sm text-gray-400 leading-3">
                Edit Details
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setActiveSection("customer");
          }}
          className={`${
            activeSection === "customer" ? "bg-[#f2f6fb]" : " bg-white"
          } px-1 sm:px-5 py-6 w-full border-r border-gray-50 flex gap-2 cursor-pointer`}
        >
          <p className=" text-blue-600 font-bold">3.</p>
          <div>
            <p className=" text-sm sm:text-base">Customers</p>
            <div className=" flex gap-1 items-end">
              <TbEdit className=" text-gray-400" />
              <p className=" hidden sm:block  text-sm text-gray-400 leading-3">
                Edit Details
              </p>
            </div>
          </div>
        </div>
      </div>
      {activeSection === "product" ? <ProductCreate /> : ""}
      {activeSection === "category" ? <CategoryCreate /> : ""}
      {activeSection === "customer" ? <CustomerCreate /> : ""}
    </div>
  );
}
