import React from "react";
import { useInView } from "react-intersection-observer";

export default function SearchSecton() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className=" w-full overflow-hidden relative ">
      <div
        className={`py-16 w-full bg-[#000000b8] flex items-center justify-center`}
      >
        <div
          ref={ref}
          className={`animated-component2Up ${
            inView ? "is-visible" : ""
          }  text-white`}
        >
          <p className="  text-center px-5 sm:px-0   w-2/3 mx-auto text-xl sm:text-2xl md:text-5xl pb-8">
            Car Pare That Exceed Your Expectations
          </p>
          <p className=" px-5 sm:w-2/3 mx-auto text-xs w-full text-center leading-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            molestias dicta ipsum explicabo eveniet ullam earum quod molestiae,
            reiciendis rerum saepe similique ipsa fugiat voluptatem architecto,
            consectetur iusto conspe similique ipsa fugiat voluptatem
            architecto, consectetur iusto consequuntur omnis!z
          </p>
          <div className=" pt-5 w-full flex items-center justify-center">
            <button className=" py-1 px-4 bg-[#fc7339]">Show more</button>{" "}
          </div>
        </div>
      </div>
      <div className=" absolute top-0 bottom-0 left-0 w-full -z-20">
        <img
          src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/06/RB26DETT-2.jpg"
          alt=""
          className=" w-full h-full  object-cover"
        />{" "}
      </div>
    </div>
  );
}
