import React from "react";
import MiddleFooterSection from "./MiddleFooterSection";
import BottomFooterSection from "./BottomFooterSection";
import TopFooterSection from "./TopFooterSection";

export default function Footer() {
  return (
    <div className="  w-full text-sm">
      <TopFooterSection/>
     <MiddleFooterSection/>
      <BottomFooterSection/>
    </div>
  );
}
