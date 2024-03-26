import React, { useEffect } from "react";
import googleImg from "../images/login/google.png";
import facebookImg from "../images/login/facebook.png";
import twitterImg from "../images/login/twitter.png";

export default function Login() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      const element = document.querySelector(".loginComponent");
      const element1 = document.querySelector(".loginTextComponent");

      element.classList.remove("slideFromRight");
      element1.classList.remove("slideFromLeft");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <>
      <div className=" w-11/12 sm:w-10/12 lg:w-8/12 mx-auto mt-10 pt-10  ">
        <div className=" w-full border-t mt-5 sm:flex ">
          <div className="loginTextComponent slideFromLeft w-full px-5 sm:border-r pt-5 sm:mb-0 mb-16">
            <div className="">
              <h1 className=" text-xl">Checkout as a new customer</h1>
              <p className=" md:pr-20">
                Porem ipsum dolor sit amet, consectetur adipiscing elit Nunc
                vulputate libero et velit ihrf riyhwoy
              </p>
            </div>
            <div className=" w-full flex items-end justify-end h-[60%] mt-5 sm:mt-0">
              <button className=" bg-[#146e3bdd] hover:bg-[#146e3b] text-white px-6 rounded-lg py-1 duration-300">
                Create an account
              </button>
            </div>
          </div>
          <div className="loginComponent slideFromRight w-full px-6 mb-10 sm:pb-8 mt-5">
            <div className=" w-full">
              <p className=" text-lg">Checkout using your account</p>
              <form action="#" className=" w-full mt-5">
                <div className=" mb-4">
                  <label htmlFor="Email address" className=" text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className=" border py-1 w-full rounded shadow outline-none px-2 focus:shadow-md hover:shadow-md hover:border-gray-300 focus:border-gray-400"
                  />
                </div>
                <div className=" mb-4">
                  <label htmlFor="Email address" className=" text-gray-600">
                    Password
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className=" border py-1 w-full rounded shadow outline-none px-2 focus:shadow-md hover:shadow-md hover:border-gray-300 focus:border-gray-400"
                  />
                </div>
                <div className=" w-full flex items-end justify-end ">
                  <button className=" bg-[#146e3bdd] hover:bg-[#146e3b] text-white px-12 rounded-full py-1 duration-300">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className=" w-full text-sm mt-2 ">
              <p className=" text-[#146e3b] mb-2">Forget password?</p>
              <div className=" w-11/12 md:w-9/12 mx-auto space-y-2">
                <div className=" flex cursor-pointer bg-[#146e3bdd] hover:bg-[#146e3b] gap-2 md:gap-5 lg:gap-10 duration-300 text-white py-1 pl-6 justify-ceter rounded-xl items-center">
                  <img src={googleImg} className=" size-4" alt="" />
                  <button>Login with Google</button>
                </div>
                <div className=" flex cursor-pointer bg-[#146e3bdd] hover:bg-[#146e3b] gap-2 md:gap-5 lg:gap-10 duration-300 text-white py-1 pl-6 justify-ceter rounded-xl items-center">
                  <img src={facebookImg} className=" size-4" alt="" />
                  <button>Login with FaceBook</button>
                </div>
                <div className=" flex cursor-pointer bg-[#146e3bdd] hover:bg-[#146e3b] gap-2 md:gap-5 lg:gap-10 duration-300 text-white py-1 pl-6 justify-ceter rounded-xl items-center">
                  <img src={twitterImg} className=" size-4" alt="" />
                  <button>Login with Twitter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
