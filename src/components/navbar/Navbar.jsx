import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className=" shadow-md">
      <div className="flex justify-between items-center h-16 md:mx-16 sm:mx-2 mx-1 p-4">
        <div>
          {/* <Logo /> */}
          <img
            src="/logo.png"
            alt="logo pic"
            className="md:w-32 w-24 sm:w-28"
          />
        </div>
        <div className="flex  sm:pl-3 w-full md:w-1/2 items-center justify-around">
          <div className="md:font-semibold text-sm md:text-base text-gray-700 hover:text-gray-900  cursor-pointer">
            Find Suppliers
          </div>
          <div className="md:font-semibold text-sm md:text-base text-gray-700 hover:text-gray-900  cursor-pointer">
            Find Service Tags
          </div>
          <div className="border-2 font-semibold border-white md:py-1 py-1 md:px-3 px-2 rounded-md bg-green-500 text-white  cursor-pointer">
            Login/Sign Up
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
