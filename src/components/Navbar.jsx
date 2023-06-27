import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className=" flex px-5  sm:gap-[122px] h-10 items-center  ">
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="" className="lg:w-12 lg:h-12 my-0 mx-5" />
        </Link>
        <h2 className="text-2xl lg:text-3xl text-gray-200 font-bold ">
          {" "}
          Fitness Junkie
        </h2>
      </div>

      <div className="flex gap-x-10 text-xl items-end mr-10">
        <Link to="/" className="text-white border-b-[3px] border-b-[#F74527] ">
          Home
        </Link>
        <a href="#exercises" className="text-white">
          Exercises
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
