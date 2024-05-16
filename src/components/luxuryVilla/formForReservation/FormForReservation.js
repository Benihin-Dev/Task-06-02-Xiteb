import React from "react";

export default function FormForReservation() {
  return (
    <div className=" w-full py-20">
      <div className=" w-full mx-auto border-l border-r  sm:w-10/12  border-[#078169]  ">
        <p className=" w-full text-center font-prata text-2xl">
          Reserve Your Dream Villa!..
        </p>
        <form
          className=" mt-10 sm:text-sm px-5 sm:px-0  sm:w-9/12 mx-auto"
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <p className=" text-sm text-[#1f5e53] mb-3">
              Personal Infromations:
            </p>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your name"
              className=" outline-none pt-2 pb-1 border-b w-full hover:border-gray-400 focus:border-gray-800 sm:w-2/3"
            />
            <div className=" sm:flex items-center justify-center mt-5 pb-3 gap-6">
              <input
                type="email"
                name="name"
                id=""
                placeholder="Email address"
                className=" outline-none pt-2 pb-1 border-b w-full hover:border-gray-400 focus:border-gray-800 sm:w-1/2"
              />
              <input
                type="text"
                name="name"
                id=""
                placeholder="Contact Number"
                className=" outline-none pt-2 pb-1 border-b w-full mt-5 sm:mt-0 hover:border-gray-400 focus:border-gray-800 sm:w-1/2"
              />
            </div>
            <textarea
              name="address"
              rows={1}
              placeholder="Address"
              className=" outline-none pt-2 pb-1 border-b mt-5 sm:mt-0 hover:border-gray-400 focus:border-gray-800 w-full"
            ></textarea>
          </div>
          <div className=" mt-10">
            <p className=" text-sm text-[#1f5e53] mb-3">
              Reservation Infromations:
            </p>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name for Reservation"
              className=" outline-none pt-2 pb-1 border-b w-full hover:border-gray-400 focus:border-gray-800 sm:w-2/3"
            />
            <div className=" sm:flex items-center justify-center mt-5 pb-3 gap-6">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Advanced Amount ($)"
                className=" outline-none pt-2 pb-1 border-b w-full hover:border-gray-400 focus:border-gray-800 sm:w-1/2"
              />
              <input
                type="text"
                name="name"
                id=""
                placeholder="Paymont Method"
                className=" outline-none pt-2 pb-1 border-b w-full mt-5 sm:mt-0 hover:border-gray-400 focus:border-gray-800 sm:w-1/2"
              />
            </div>
            <input
              name="text"
              placeholder="Agrement Details"
              className=" outline-none pt-2 pb-1 border-b  mt-5 mb-5 sm:mt-0 hover:border-gray-400 focus:border-gray-800 w-full"
            />
            <textarea
              name="address"
              rows={1}
              placeholder="Write Your Note.."
              className=" outline-none pt-2 pb-1 border-b mt-5 sm:mt-0 hover:border-gray-400 focus:border-gray-800 w-full"
            ></textarea>
          </div>
          <button className=" w-full mt-5 border py-2 rounded shadow-sm bg-gray-50 border-[#078169] hover:bg-[#078169] duration-200 hover:text-white">
            Make Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
