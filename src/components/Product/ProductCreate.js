import React, { useState, useEffect, useRef } from "react";
import "./product.css";
import { IoIosArrowDown } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { PiImagesThin } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsPlusCircleFill } from "react-icons/bs";
import { TbAlertCircleFilled } from "react-icons/tb";
import ViewDetails from "./ViewDetails";

export default function ProductCreate() {
  //data & state values for the form
  const [newProductDetails, setNewProductDetails] = useState({});
  const [availableSize, setAvailableSize] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryListState, setCategoryListState] = useState(false);
  const [deliveryState, setDeliveryState] = useState("");
  const [formatedPrice, setFormatedPrice] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [subImages, setSubImages] = useState([]);
  const [allImages, setAllImages] = useState(
    [mainImage, ...subImages].filter(Boolean)
  );
  const [dragImageIndex, setDragImageIndex] = useState(-1);
  const [draggedOverImageIndex, setDraggedOverImageIndex] = useState(-1);
  const [toasterDetails, setToasterDetails] = useState({
    state: false,
    toasterType: "success",
    message: " Records Added Successfully!..",
  });
  const [
    newProductDetailsShowComponentSate,
    setNewProductDetailsShowComponentSate,
  ] = useState(false);
  const [categoryList, setCategoryList] = useState([
    "Item for Gents",
    "Item for Ladies",
    "Item for Adults",
    "Item for Childs",
    "Item for Boy-Childs",
    "Item for Girl-Childs",
    "Item for Babies",
    "Item for Boy-Babies",
    "Item for Girl-Babies",
    "Item for Boys",
    "Item for Girls",
    "None",
  ]);
  const [availableSizeList, setAvailableSizeList] = useState([
    { size: "<X-Small", status: false },
    { size: "X-Small", status: false },
    { size: "Small", status: false },
    { size: "Medium", status: false },
    { size: "Large", status: false },
    { size: "X-Large", status: false },
    { size: "2X-Large", status: false },
    { size: "3X-Large", status: false },
    { size: "4X-Large", status: false },
    { size: "5X-Large", status: false },
  ]);

  //function for re-arange the image order
  function handleReArangeImageOrder() {
    const imageClone = [...allImages];
    const temp = imageClone[dragImageIndex];
    imageClone[dragImageIndex] = imageClone[draggedOverImageIndex];
    imageClone[draggedOverImageIndex] = temp;
    setAllImages(imageClone);
    setNewProductDetails({ ...newProductDetails, images: imageClone });
  }

  //handling image upload event
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 6) {
      console.log("Something Wrong!..");
      return;
    }

    let newMainImage = mainImage;
    let newSubImages = [...subImages];

    if (newMainImage === null && files.length > 0) {
      newMainImage = files.shift();
    }

    if (newSubImages.length + files.length > 5) {
      console.log("Something Wrong!..");
      return;
    }

    newSubImages = [...newSubImages, ...files];

    setMainImage(newMainImage);
    setSubImages(newSubImages);

    const allImages = [newMainImage, ...newSubImages].filter(Boolean);

    setNewProductDetails((prevDetails) => ({
      ...prevDetails,
      images: allImages,
    }));
    e.target.value = [];
  };

  //specific image delete function
  function deleteImage(index) {
    const updatedImages = allImages.filter((_, i) => i !== index);
    setAllImages(updatedImages);
    setNewProductDetails({ ...newProductDetails, images: updatedImages });
  }

  //handling product details sumbit event
  function handleSubmitDetails(event) {
    event.preventDefault();
    setToasterDetails({
      state: true,
      toasterType: "success",
      message: " Details Added Successfully!..",
    });
    setNewProductDetailsShowComponentSate(true);
  }

  //for get all available sizes
  useEffect(() => {
    const selectedSizes = availableSizeList
      .filter((sizeCategory) => sizeCategory.status)
      .map((sizeCategory) => sizeCategory.size);
    setAvailableSize(selectedSizes);
  }, [availableSizeList]);

  //function for handle onchange event for input elements
  function handleOnchange(event) {
    const { name, value } = event.target;
    if (name === "price") {
      const formattedValue = parseFloat(value).toFixed(2);
      setFormatedPrice(formattedValue);
      setNewProductDetails({ ...newProductDetails, [name]: formattedValue });
    } else {
      setNewProductDetails({ ...newProductDetails, [name]: value });
    }
  }

  //for set selected category on product details
  useEffect(() => {
    setNewProductDetails({ ...newProductDetails, category: selectedCategory });
  }, [selectedCategory]);

  //for set available size on product details
  useEffect(() => {
    setNewProductDetails({
      ...newProductDetails,
      availableSize: availableSize,
      images: [],
    });
  }, [availableSize]);

  //for set deliveryState on product details
  useEffect(() => {
    setNewProductDetails({
      ...newProductDetails,
      deliveryState: deliveryState,
    });
  }, [deliveryState]);

  //for set selectedCategory on product details
  useEffect(() => {
    setNewProductDetails({ ...newProductDetails, category: selectedCategory });
  }, [selectedCategory]);

  //store the all image deteils within on array
  useEffect(() => {
    setAllImages([mainImage, ...subImages].filter(Boolean));
  }, [mainImage, subImages]);

  //for hide the toaster message after 4.8s
  useEffect(() => {
    setTimeout(() => {
      setToasterDetails({ ...toasterDetails, state: false });
    }, 4800);
  }, [toasterDetails]);

  return (
    <div className=" w-full">
      <div className=" w-full   sm:px-5 bg-[#f2f6fb]">
        <div className=" bg-white pb-20">
          <div className=" px-5 sm:px-0 w-full sm:w-11/12 md:w-10/12   pt-10 mx-auto  ">
            <p
              onClick={() => {
                console.log(newProductDetails);
              }}
              className=" cursor-default text-gray-400 font-semibold pb-5"
            >
              {" "}
              New Product Details
            </p>
            <form
              action="#"
              onSubmit={(e) => {
                handleSubmitDetails(e);
              }}
              className=""
            >
              <div className="  grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 md:grid-cols-3">
                <div className="  ">
                  <p className=" lable">Title :</p>
                  <input
                    type="text"
                    name="productTitle"
                    placeholder="Denim Jeans"
                    required
                    className=" textInput"
                    onChange={(e) => {
                      handleOnchange(e);
                    }}
                  />
                </div>
                <div className="  ">
                  <p className=" lable">Stock Keeping Unit :</p>
                  <input
                    type="text"
                    name="Sku"
                    placeholder="0"
                    required
                    className=" textInput"
                    onChange={(e) => {
                      handleOnchange(e);
                    }}
                  />
                </div>
                <div className=" relative  ">
                  <p className=" lable">Unit Price :</p>
                  <span className=" absolute bottom-1 cursor-default  text-gray-600 right-2 pl-2  ">
                    LKR
                  </span>
                  <input
                    type="text"
                    required
                    name="price"
                    placeholder="0.00"
                    className=" textInput"
                    onChange={(e) => {
                      handleOnchange(e);
                    }}
                    value={formatedPrice}
                  />
                </div>
              </div>
              <div className=" pt-5 md:pt-10 ">
                <p className=" lable">Product Description :</p>
                <textarea
                  maxLength="500"
                  required
                  rows={5}
                  type="text"
                  name="description"
                  placeholder="Enter a brief description of the product (Max 500 characters)"
                  className=" textInput"
                  onChange={(e) => {
                    handleOnchange(e);
                  }}
                ></textarea>
              </div>
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 pt-5 sm:pt-10">
                <div className=" relative  ">
                  <p className=" lable">Category :</p>
                  <input
                    type="text"
                    name="category"
                    readOnly
                    placeholder="Select Category Here.."
                    onClick={() => {
                      setCategoryListState(!categoryListState);
                    }}
                    value={selectedCategory}
                    className=" cursor-pointer textInput"
                  />
                  <IoIosArrowDown className=" text-gray-400 hover:text-gray-600 duration-200 cursor-pointer absolute right-2 bottom-2 size-5" />
                  {categoryListState && (
                    <div className=" absolute top-[100%] h-52 overflow-y-scroll customScrollBar left-0 right-0 bg-white z-10 border w-full">
                      {categoryList.map((category, index) => (
                        <p
                          key={index}
                          onClick={() => {
                            setSelectedCategory(category);
                            setCategoryListState(!categoryListState);
                          }}
                          className=" text-gray-600 border-b border-gray-100 px-3 py-1 hover:bg-gray-100"
                        >
                          {category}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <div className=" flex items-center pt-4 gap-5">
                  <p className="lable">Forigen Country Delivery : </p>
                  <div className=" ">
                    <div className=" flex border  ">
                      <p
                        onClick={() => {
                          setDeliveryState("yes");
                        }}
                        className={` ${
                          deliveryState === "yes"
                            ? "bg-green-500 text-white "
                            : ""
                        }  px-3 cursor-pointer hover:bg-green-500 duration-200 hover:text-white `}
                      >
                        Yes
                      </p>
                      <p
                        onClick={() => {
                          setDeliveryState("no");
                        }}
                        className={`${
                          deliveryState === "no" ? "bg-red-500 text-white " : ""
                        } border-l px-3 cursor-pointer hover:bg-red-500 duration-200 hover:text-white `}
                      >
                        No
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:flex gap-10 pt-5 sm:pt-10">
                <div className=" lg:w-1/3">
                  <p
                    onClick={() => {
                      //   console.log(availableSize);
                    }}
                    className=" lable"
                  >
                    Available size of the product :
                  </p>
                  <div className=" mt-4 grid grid-cols-3 gap-3 border border-gray-100 p-3">
                    {availableSizeList.map((sizeCategory, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setAvailableSizeList((prevList) =>
                            prevList.map((item, i) =>
                              i === index
                                ? { ...item, status: !item.status }
                                : item
                            )
                          );
                        }}
                        className=" cursor-pointer flex gap-1 items-center"
                      >
                        <div className=" relative size-4 border border-gray-300 cursor-pointer">
                          {availableSizeList[index].status && (
                            <GiCheckMark className=" absolute bottom-0 left-0 size-4 " />
                          )}
                        </div>
                        <p className=" text-sm">{sizeCategory.size}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" lg:w-2/3">
                  <p className=" lable pb-1">
                    Product Images :{" "}
                    <span className=" text-orange-500">
                      {" "}
                      {allImages.length}
                    </span>
                    /6
                  </p>
                  <div className="bg-[#f4f4f477]  relative w-full rounded border">
                    <input
                      className=" z-20 pt-32 pb-2 px-2 text-gray-300 relative w-full"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                    />
                    <div className=" z-0 absolute  top-2 w-full right-0 left-0   px-5  mt-5 text-gray-400 pb-2">
                      <p className=" text-center text-sm leading-4">
                        {" "}
                        Drag and drop images here.
                      </p>
                      <div className=" w-full flex items-center justify-center">
                        <PiImagesThin className=" text-gray-300 size-12 sm:mt-4" />
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 mt-4">
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
                          draggable
                          onDragStart={() => {
                            setDragImageIndex(index);
                          }}
                          onDragEnter={() => {
                            setDraggedOverImageIndex(index);
                          }}
                          onDragEnd={handleReArangeImageOrder}
                          onDragOver={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <RxCross2
                          onClick={() => {
                            deleteImage(index);
                          }}
                          className=" absolute top-[2px] right-[2px] size-4 text-gray-400 hover:text-red-400 duration-200 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button className=" w-full border bg-[#2da9d2] hover:bg-[#3b82f6] duration-200 py-2 text-white rounded-md mt-5 md:mt-10">
                Add New Product
              </button>
            </form>
          </div>
        </div>
      </div>
      {toasterDetails.state && (
        <div className=" fixed top-20 z-50 right-5 h-screen">
          <div
            className={` ${
              toasterDetails.toasterType === "success"
                ? "border-[#22fa80e9] text-[#535252]"
                : toasterDetails.toasterType === "failed"
                ? "border-red-500 text-[#605f5f]"
                : "border-yellow-300 text-[#565555]"
            } toasterAnimation toasterStyle`}
          >
            {toasterDetails.toasterType === "success" ? (
              <IoCheckmarkCircle className=" text-[#14d768e9] size-6  " />
            ) : toasterDetails.toasterType === "failed" ? (
              <BsPlusCircleFill className="  rotate-45 text-red-500 size-5 " />
            ) : (
              <TbAlertCircleFilled className=" text-yellow-400 size-5 " />
            )}

            {toasterDetails.message}
            <RiCloseFill
              onClick={() => {
                setToasterDetails({ ...toasterDetails, state: false });
              }}
              className=" absolute right-0 top-0 text-gray-400 cursor-pointer hover:text-black duration-200   "
            />
          </div>
        </div>
      )}
      {newProductDetailsShowComponentSate && (
        <div className=" fixed top-0 py-20 h-screen  overflow-y-scroll bg-[#bcbcbc50] z-40 w-full">
          <div className=" w-full bg-[#ededff] mx-auto px-5 sm:px-0 sm:w-10/12 md:w-8/12 relative">
            <div className=" pt-10 pl-5 sm:pr-10 text-gray-400 text-lg w-full ">
              <p className=" border-b"> New Product Details</p>
            </div>
            {newProductDetails && (
              <div className=" mt-10  pr-5 space-y-5 sm:mx-5 pb-10">
                <div className=" flex   gap-5">
                  <p className=" text-gray-800">Product Title:</p>
                  <p className="  text-gray-400">
                    {newProductDetails.productTitle}
                  </p>
                </div>
                <div className=" flex  gap-5">
                  <p className=" text-gray-800">Category Type:</p>
                  <p className="  text-gray-400">
                    {newProductDetails.category}
                  </p>
                </div>
                <div className=" flex  gap-5">
                  <p className=" text-gray-800">SKU:</p>
                  <p className="  text-gray-400">{newProductDetails.Sku}</p>
                </div>
                <div className=" flex  gap-5">
                  <p className=" text-gray-800">Price:</p>
                  <p className="  text-gray-400">
                    {newProductDetails.price} LKR
                  </p>
                </div>
                <div className=" flex  gap-5">
                  <p className=" text-gray-800">Foreign Country Delivery:</p>
                  <p className="  text-gray-400">
                    {newProductDetails.deliveryState}
                  </p>
                </div>
                <div className=" flex   gap-5">
                  <p className=" text-gray-800">Description:</p>
                  <p className="  text-gray-400 text-justify ">
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
                  <p className=" text-gray-800">Images:</p>
                  <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2  mt-2 ">
                    {allImages.map((image, index) => (
                      <div
                        key={index}
                        className={` ${
                          index === 0 ? "border-gray-400" : ""
                        } overflow-hidden  size-16 sm:size-20 bg-white p-2 flex items-center hover:border-gray-500 justify-center relative border`}
                      >
                        <img
                          className=" object-contain cursor-pointer relative "
                          src={URL.createObjectURL(image)}
                          alt={`Img ${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <RxCross2
              onClick={() => {
                setNewProductDetailsShowComponentSate(false);
              }}
              className=" absolute top-2 right-2 size-5 text-gray-400 hover:text-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
