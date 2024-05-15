import React, { useState } from "react";
import "./Agent.css";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsSkype } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import agentImg1 from "../../images/Photo.jpg";
import agentImg2 from "../../images/Photo-1.jpg";
import agentImg3 from "../../images/Photo-2.jpg";

export default function Agents() {
  const [agentData, setAgentData] = useState([
    {
      img: agentImg1,
      name: "Trevor Walsh",
      borkerType: "Commercial Broker",
      conatctInfo: {
        facebook: "www.nothing.com",
        x: "www.nothing.com",
        instagram: "www.nothing.com",
        skype: "www.nothing.com",
      },
      desc: "There are many variations of passages ofen Ipsum available maioritv to suffered.",
    },
    {
      img: agentImg2,
      name: "Trevor Walsh",
      borkerType: "Commercial Broker",
      conatctInfo: {
        facebook: "www.nothing.com",
        x: "www.nothing.com",
        instagram: "www.nothing.com",
        skype: "www.nothing.com",
      },
      desc: "There are many variations of passages ofen Ipsum available maioritv to suffered.",
    },
    {
      img: agentImg3,
      name: "Trevor Walsh",
      borkerType: "Commercial Broker",
      conatctInfo: {
        facebook: "www.nothing.com",
        x: "www.nothing.com",
        instagram: "www.nothing.com",
        skype: "www.nothing.com",
      },
      desc: "There are many variations of passages ofen Ipsum available maioritv to suffered.",
    },
  ]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      } w-full bg-[#f9f9f9] py-20`}
    >
      <p className="agentHead">Agents Make The Difference</p>
      <div className=" agentContainer">
        {agentData.map((agent, index) => (
          <div key={index} className=" overflow-hidden  shadow-sm bg-white">
            <img src={agent.img} className=" w-full" alt="" />
            <p className="agentName ">{agent.name}</p>
            <p className="agentBrokerType ">{agent.borkerType}</p>
            <div className=" flex items-center justify-center gap-2 py-1">
              <a href={agent.conatctInfo.facebook}>
                <FaFacebookF className="agentSocilaMediaLink" />
              </a>
              <a href={agent.conatctInfo.x}>
                <RiTwitterXFill className="agentSocilaMediaLink" />
              </a>
              <a href={agent.conatctInfo.instagram}>
                <LuInstagram className="agentSocilaMediaLink" />
              </a>
              <a href={agent.conatctInfo.skype}>
                <BsSkype className="agentSocilaMediaLink" />
              </a>
            </div>
            <p className="agentDesc">{agent.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
