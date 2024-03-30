import React, { useState } from "react";
import cardCornerImg from "../images/cardCornerPic.png";
import cardCornerLogo from "../images/cartCornerLogo.png";
import visaImg from "../images/visaText.png";
import dBlueBtnImg from "../images/darkBlueColorBtn.png";
import lBlueBtnImg from "../images/ligthBlueColorBtn.png";
import { IoCheckmark } from "react-icons/io5";

export default function Pricing() {
  const [leftCardColor, setLeftCardColor] = useState("bg-[#12183d]");
  const [rightCardColor, setRightCardColor] = useState("bg-[#646a9c]");
  return (
    <div className=" w-full bg-[#f2f6ff] py-10">
      <div className=" w-11/12 sm:w-9/12 items-center mx-auto text-[#1433ff] pt-12 pb-5">
        <div className=" text-center">
          <p className=" w-full text-4xl font-semibold">
            An exceptional service,
            <span className=" text-[#ff6262]"> at the right price</span>
          </p>
          <p className=" text-black">
            Start with our free plan and switch to premium as you grow.
          </p>
        </div>
        <div className="hidden sm:flex w-full mt-20 text-[#12183d]">
          <div className=" w-1/2">
            <div className="w-11/12 mx-auto border rounded-3xl overflow-hidden bg-white">
              <p className=" w-full text-center mt-10 text-3xl font-semibold">
                Free
              </p>
              <p className=" w-full text-center mt-10 text-6xl font-semibold">
                $0<span className=" text-xl">/m</span>
              </p>
              <p className=" text-[#646b9c] w-3/5 mx-auto text-center mt-10">
                Manage your business with a simple and efficient account.
              </p>
              <div className=" w-full flex items-center justify-center">
                <button className=" mt-2 w-fit py-2 border border-[#12183d] px-6 rounded-xl text-[#12183d] hover:text-white hover:bg-[#12183d] duration-200 shadow-md  shadow-gray-400">
                  Get Started
                </button>
              </div>
              <div
                className={`${leftCardColor} relative border w-[90vw] mt-20 h-[55vw] mx-auto sm:w-[30vw] sm:h-[17vw] rounded-xl  shadow-lg hover:shadow-gray-600 shadow-gray-500 hover:scale-[1.004] duration-100`}
              >
                <img
                  src={cardCornerImg}
                  className=" absolute top-0 right-0 w-[25vw] sm:w-[9vw]"
                  alt=""
                />
                <img
                  src={cardCornerLogo}
                  className=" absolute top-[5%] left-[4%] w-[15vw] sm:w-[5vw]"
                  alt=""
                />
                <img
                  src={visaImg}
                  className=" absolute bottom-[15%] right-[6%] w-[15vw] sm:w-[6vw]"
                  alt=""
                />
                <p className="absolute bottom-[15%] left-[6%] text-white leading-4">
                  1234 **** **** 1234 <br />
                  <span className=" pl-2 text-gray-400 text-xs">
                    Valid Thru: 01/26
                  </span>
                </p>
              </div>
              <div className=" w-full mt-3 flex gap-3 justify-center items-center">
                <img
                  onClick={() => {
                    setLeftCardColor("bg-[#12183d]");
                  }}
                  src={dBlueBtnImg}
                  className=" sm:w-[2.5vw] cursor-pointer shadow-md hover:shadow-gray-400 duration-200 rounded-full"
                  alt=""
                />
                <img
                  onClick={() => {
                    setLeftCardColor("bg-[#646a9c]");
                  }}
                  src={lBlueBtnImg}
                  className=" sm:w-[2.5vw] cursor-pointer shadow-md hover:shadow-gray-400 duration-200 rounded-full"
                  alt=""
                />
              </div>
              <div className=" w-11/12 mx-auto my-10 space-y-4 ">
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>10 free local transfers</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Free ATM withdrawals in LKR up to 50,000 per month</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Free payments to other Draft accounts</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Prepaid debit cards</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Virtual cards</p>
                </div>
                <div className="  flex items-center text-[#cdd8f2]  gap-2">
                  <IoCheckmark className=" text-[#cdd8f2] size-5" />
                  <p>Priority 24/7 support</p>
                </div>
                <div className="  flex items-center text-[#cdd8f2]  gap-2 ">
                  <IoCheckmark className=" text-[#cdd8f2] size-5" />
                  <p>Exchange 24 currencies</p>
                </div>
                <div className="  flex items-center text-[#cdd8f2]  gap-2 ">
                  <IoCheckmark className=" text-[#cdd8f2] size-5" />
                  <p>Multi-user access</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/2">
            <div className="w-11/12 mx-auto border rounded-3xl overflow-hidden bg-white">
              <p className=" w-full text-center mt-10 text-3xl font-semibold">
                Premium
              </p>
              <p className=" w-full text-center mt-10 text-6xl font-semibold">
                $20<span className=" text-xl">/m</span>
              </p>
              <p className=" text-[#646b9c] w-3/5 mx-auto text-center mt-10">
                Manage your business with a simple and efficient account.
              </p>
              <div className=" w-full flex items-center justify-center">
                <button className=" mt-2 w-fit py-2 border border-[#12183d] px-6 rounded-xl text-[#12183d] hover:text-white hover:bg-[#12183d] duration-200 shadow-md  shadow-gray-400">
                  Get Started
                </button>
              </div>
              <div
                className={`${rightCardColor} relative border w-[90vw] mt-20 h-[55vw] mx-auto sm:w-[30vw] sm:h-[17vw] rounded-xl  shadow-lg hover:shadow-gray-600 shadow-gray-500 hover:scale-[1.004] duration-100`}
              >
                <img
                  src={cardCornerImg}
                  className=" absolute top-0 right-0 w-[25vw] sm:w-[9vw]"
                  alt=""
                />
                <img
                  src={cardCornerLogo}
                  className=" absolute top-[5%] left-[4%] w-[15vw] sm:w-[5vw]"
                  alt=""
                />
                <img
                  src={visaImg}
                  className=" absolute bottom-[15%] right-[6%] w-[15vw] sm:w-[6vw]"
                  alt=""
                />
                <p className="absolute bottom-[15%] left-[6%] text-white leading-4">
                  1234 **** **** 1234 <br />
                  <span className=" pl-2 text-gray-400 text-xs">
                    Valid Thru: 01/26
                  </span>
                </p>
              </div>
              <div className=" w-full mt-3 flex gap-3 justify-center items-center">
                <img
                  onClick={() => {
                    setRightCardColor("bg-[#12183d]");
                  }}
                  src={dBlueBtnImg}
                  className=" sm:w-[2.5vw] cursor-pointer shadow-md hover:shadow-gray-400 duration-200 rounded-full"
                  alt=""
                />
                <img
                  onClick={() => {
                    setRightCardColor("bg-[#646a9c]");
                  }}
                  src={lBlueBtnImg}
                  className=" sm:w-[2.5vw] cursor-pointer shadow-md hover:shadow-gray-400 duration-200 rounded-full"
                  alt=""
                />
              </div>
              <div className=" w-11/12 mx-auto my-10 space-y-4 ">
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>10 free local transfers</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Free ATM withdrawals in LKR up to 50,000 per month</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Free payments to other Draft accounts</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Prepaid debit cards</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Virtual cards</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Priority 24/7 support</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Exchange 24 currencies</p>
                </div>
                <div className="  flex items-center gap-2 ">
                  <IoCheckmark className=" text-[#1433ff] size-5" />
                  <p>Multi-user access</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  sm:hidden flex w-full mt-20 text-[#12183d] relative h-[300vw] sm:h-full sm:overflow-hidden overflow-x-scroll overflow-y-hidden">
          <div className=" absolute sm:relative top-0 h-full gap-4 flex">
            <div className=" w-1/2">
              <div className="w-[90vw] mx-auto border rounded-3xl overflow-hidden bg-white">
                <p className=" w-full text-center mt-10 text-3xl font-semibold">
                  Free
                </p>
                <p className=" w-full text-center mt-10 text-6xl font-semibold">
                  $0<span className=" text-xl">/m</span>
                </p>
                <p className=" text-[#646b9c] w-3/5 mx-auto text-center mt-10">
                  Manage your business with a simple and efficient account.
                </p>
                <div className=" w-full flex items-center justify-center">
                  <button className=" mt-2 w-fit py-2 border border-[#12183d] px-6 rounded-xl text-[#12183d] hover:text-white hover:bg-[#12183d] duration-200 shadow-md  shadow-gray-400">
                    Get Started
                  </button>
                </div>
                <div
                  className={`${leftCardColor} relative border w-[85vw] mt-20 h-[53vw] mx-auto sm:w-[30vw] sm:h-[17vw] rounded-xl  shadow-lg hover:shadow-gray-600 shadow-gray-500 hover:scale-[1.004] duration-100`}
                >
                  <img
                    src={cardCornerImg}
                    className=" absolute top-0 right-0 w-[25vw] sm:w-[9vw]"
                    alt=""
                  />
                  <img
                    src={cardCornerLogo}
                    className=" absolute top-[5%] left-[4%] w-[15vw] sm:w-[5vw]"
                    alt=""
                  />
                  <img
                    src={visaImg}
                    className=" absolute bottom-[15%] right-[6%] w-[15vw] sm:w-[6vw]"
                    alt=""
                  />
                  <p className="absolute bottom-[15%] left-[6%] text-white leading-4">
                    1234 **** **** 1234 <br />
                    <span className=" pl-2 text-gray-400 text-xs">
                      Valid Thru: 01/26
                    </span>
                  </p>
                </div>
                <div className=" w-full mt-3 flex gap-3 justify-center items-center">
                  <img
                    onClick={() => {
                      setLeftCardColor("bg-[#12183d]");
                    }}
                    src={dBlueBtnImg}
                    className="w-[10vw] sm:w-[2.5vw] cursor-pointer shadow-md hover:shadow-gray-400 duration-200 rounded-full"
                    alt=""
                  />
                  <img
                    onClick={() => {
                      setLeftCardColor("bg-[#646a9c]");
                    }}
                    src={lBlueBtnImg}
                    className="w-[10vw] sm:w-[2.5vw] cursor-pointer shadow-md hover:shadow-gray-400 duration-200 rounded-full"
                    alt=""
                  />
                </div>
                <div className=" w-11/12 mx-auto my-10 space-y-4 ">
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>10 free local transfers</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Free ATM withdrawals in LKR up to 50,000 per month</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Free payments to other Draft accounts</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Prepaid debit cards</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Virtual cards</p>
                  </div>
                  <div className="  flex items-center text-[#cdd8f2]  gap-2">
                    <IoCheckmark className=" text-[#cdd8f2] size-5" />
                    <p>Priority 24/7 support</p>
                  </div>
                  <div className="  flex items-center text-[#cdd8f2]  gap-2 ">
                    <IoCheckmark className=" text-[#cdd8f2] size-5" />
                    <p>Exchange 24 currencies</p>
                  </div>
                  <div className="  flex items-center text-[#cdd8f2]  gap-2 ">
                    <IoCheckmark className=" text-[#cdd8f2] size-5" />
                    <p>Multi-user access</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-1/2">
              <div className="w-[90vw] mx-auto border rounded-3xl overflow-hidden bg-white">
                <p className=" w-full text-center mt-10 text-3xl font-semibold">
                  Premium
                </p>
                <p className=" w-full text-center mt-10 text-6xl font-semibold">
                  $20<span className=" text-xl">/m</span>
                </p>
                <p className=" text-[#646b9c] w-3/5 mx-auto text-center mt-10">
                  Manage your business with a simple and efficient account.
                </p>
                <div className=" w-full flex items-center justify-center">
                  <button className=" mt-2 w-fit py-2 border border-[#12183d] px-6 rounded-xl text-[#12183d] hover:text-white hover:bg-[#12183d] duration-200 shadow-md  shadow-gray-400">
                    Get Started
                  </button>
                </div>
                <div
                  className={`${rightCardColor} relative border w-[85vw] mt-20 h-[52vw] mx-auto sm:w-[30vw] sm:h-[17vw] rounded-xl  shadow-lg hover:shadow-gray-600 shadow-gray-500 hover:scale-[1.004] duration-100`}
                >
                  <img
                    src={cardCornerImg}
                    className=" absolute top-0 right-0 w-[25vw] sm:w-[9vw]"
                    alt=""
                  />
                  <img
                    src={cardCornerLogo}
                    className=" absolute top-[5%] left-[4%] w-[15vw] sm:w-[5vw]"
                    alt=""
                  />
                  <img
                    src={visaImg}
                    className=" absolute bottom-[15%] right-[6%] w-[15vw] sm:w-[6vw]"
                    alt=""
                  />
                  <p className="absolute bottom-[15%] left-[6%] text-white leading-4">
                    1234 **** **** 1234 <br />
                    <span className=" pl-2 text-gray-400 text-xs">
                      Valid Thru: 01/26
                    </span>
                  </p>
                </div>
                <div className=" w-full mt-3 flex gap-3 justify-center items-center">
                  <img
                    onClick={() => {
                      setRightCardColor("bg-[#12183d]");
                    }}
                    src={dBlueBtnImg}
                    className="w-[10vw] sm:w-[2.5vw] cursor-pointer shadow-md hover:shadow-gray-400 duration-200 rounded-full"
                    alt=""
                  />
                  <img
                    onClick={() => {
                      setRightCardColor("bg-[#646a9c]");
                    }}
                    src={lBlueBtnImg}
                    className="w-[10vw] sm:w-[2.5vw] cursor-pointer shadow-md hover:shadow-gray-400 duration-200 rounded-full"
                    alt=""
                  />
                </div>
                <div className=" w-11/12 mx-auto my-10 space-y-4 ">
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>10 free local transfers</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Free ATM withdrawals in LKR up to 50,000 per month</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Free payments to other Draft accounts</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Prepaid debit cards</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Virtual cards</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Priority 24/7 support</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Exchange 24 currencies</p>
                  </div>
                  <div className="  flex items-center gap-2 ">
                    <IoCheckmark className=" text-[#1433ff] size-5" />
                    <p>Multi-user access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
