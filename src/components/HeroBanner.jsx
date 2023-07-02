import React from "react";
// import HeroBannerImage from '../assets/images/banner.png'
import gymhero from "../assets/images/gym-hero-stock.jpg";

const HeroBanner = () => {
  return (
    <section className="flex items-center h-[582px] lg:h-full lg:items-start lg:pt-[165px] relative">
      <div className="flex flex-col items-center gap-y-10">
        <h3 className=" w-screen flex justify-center items-center font-bold text-xl text-gray-200 ml-4 md:ml-0 lg:text-5xl">
          Build your body, Transform your mind!
        </h3>
        <button
          href="#exercises"
          className="w-[100px] h-8 mt-4 text-gray-200 bg-[#F74527] rounded-md "
        >
          See Exercises
        </button>
        <div className="">
          <h4 className="absolute left-3 bottom-1 font-semibold text-[#ff2625] opacity-10 lg:opacity-10 text-[100px] lg:text-[180px] ">
            workout
          </h4>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
