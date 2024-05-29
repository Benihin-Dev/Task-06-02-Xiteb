import React from "react";

export default function ViewDetails(newProductDetails) {
  return (
    <div className=" w-full bg-yellow-50 mx-auto px-5 sm:px-0 sm:w-10/12 md:w-8/12">
      <div className=" pt-10 pl-5 sm:pr-10 text-gray-400 text-lg w-full ">
        <p className=" border-b"> New Product Details</p>
      </div>
      {newProductDetails && (
        <div className=" mt-10  pr-5 space-y-5 sm:mx-5 pb-10">
          <div className=" flex   gap-5">
            <p className=" text-gray-800">Product Title:</p>
            <p className="  text-gray-400">{newProductDetails.productTitle}</p>
          </div>
          <div className=" flex  gap-5">
            <p className=" text-gray-800">Category Type:</p>
            <p className="  text-gray-400">{newProductDetails.category}</p>
          </div>
          <div className=" flex  gap-5">
            <p className=" text-gray-800">SKU:</p>
            <p className="  text-gray-400">{newProductDetails.Sku}</p>
          </div>
          <div className=" flex  gap-5">
            <p className=" text-gray-800">Price:</p>
            <p className="  text-gray-400">{newProductDetails.price} LKR</p>
          </div>
          <div className=" flex  gap-5">
            <p className=" text-gray-800">Foreign Country Delivery:</p>
            <p className="  text-gray-400">{newProductDetails.deliveryState}</p>
          </div>
          <div className=" flex   gap-5">
            <p className=" text-gray-800">Description:</p>
            <p className="  text-gray-400 text-justify text-sm">
              {newProductDetails.description}
            </p>
          </div>
          <div className=" flex  gap-5">
            <p className=" text-gray-800">Available Size:</p>
            <p className="  text-gray-400">
              {newProductDetails.availableSize && (
                <>
                  {newProductDetails.availableSize.map((size, index) => (
                    <span key={index} className=" px-1">
                      {size},
                    </span>
                  ))}
                </>
              )}
            </p>
          </div>
          <div className=" flex  gap-5">
            <p className=" text-gray-800">Available Size:</p>
            {/* <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 mt-4">
            {allImages.map((image, index) => (
              <div
                key={index}
                className={` ${
                  index === 0 ? "border-gray-400" : ""
                } overflow-hidden  size-24 sm:size-28 bg-white p-2 flex items-center hover:border-gray-500 justify-center relative border`}
              >
                <img
                  className=" object-contain cursor-pointer relative "
                  src={URL.createObjectURL(image)}
                  alt={`Img ${index}`}
                />
              </div>
            ))}
          </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
