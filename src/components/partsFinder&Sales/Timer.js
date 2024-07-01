import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

export default function Timer({ endDate }) {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateRemainingTime = () => {
    const difference = endDate - currentTime;
    return difference > 0 ? difference : 0;
  };

  const renderTimer = ({ days, hours, minutes, seconds }) => {
    const totalHours = days * 24 + hours;
    const hoursStr = totalHours.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = seconds.toString().padStart(2, "0");

    return (
      <div className="timer-container lg:text-lg flex  mt-4 gap-1 md:gap-2  cursor-default font-semibold text-gray-700">
        <div className="p-2 rounded-sm bg-[#38a9d6] text-white w-full">
          <p className=" w-full text-center ">{hoursStr}</p>
          <p className=" text-[10px] font-normal  leading-4 w-full text-center">Hours</p>
        </div>
        <div className="p-2 rounded-sm bg-[#38a9d6] text-white  w-full">
          <p className=" w-full text-center ">{minutesStr}</p>
          <p className=" text-[10px] font-normal leading-4  w-full text-center">Minutes</p>
        </div>
        <div className="p-2 rounded-sm bg-[#38a9d6] text-white  w-full">
          <p className=" w-full text-center ">{secondsStr}</p>
          <p className=" text-[10px] font-normal leading-4  w-full text-center">Seconds</p>
        </div>
      </div>
    );
  };

  const remainingTime = calculateRemainingTime();

  return (
    <div>
      {remainingTime > 0 ? (
        <Countdown date={endDate} renderer={renderTimer} />
      ) : (
        <p className="timer-expired px-2 rounded bg-white">Offer Expired</p>
      )}
    </div>
  );
}
