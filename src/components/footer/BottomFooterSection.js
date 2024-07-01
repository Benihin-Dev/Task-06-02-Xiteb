import React from 'react'

export default function BottomFooterSection() {
  return (
    <div className=" w-full py-5 bg-[#363636ca] text-gray-200 text-xs">
    <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto sm:flex items-center gap-10 space-y-3 sm:space-y-0  justify-between">
      <p className=" w-full sm:w-1/2 text-center sm:text-start cursor-default">
        Copyright © 2024 SpareX, All rights reserved. Powered by Nothing
      </p>
      <div className=" flex w-full sm:w-1/2 justify-center sm:justify-end items-center">
        <ul className=" sm:w-fit flex items-center justify-between gap-2">
          <li className=" cursor-pointer"> Products </li>
          <li>|</li>
          <li  className=" cursor-pointer">Brands</li>
          <li>|</li>
          <li  className=" cursor-pointer"> Offers</li>
          <li>|</li>
          <li  className=" cursor-pointer">AboutUs</li>
          <li>|</li>
          <li  className=" cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  </div>
  )
}
