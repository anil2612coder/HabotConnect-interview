import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import PlaceCard from "./PlaceCard";

const ChoosePlace = () => {
  return (
    <div className="flex  inset-0 relative -top-32 flex-col md:flex-row mx-4 items-center gap-6 justify-between w-11/12">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="font-bold text-4xl font-sans mb-6 text-gray-800">
          Ready to dive into Habot
        </h1>
        <p className="font-medium text-gray-600 font-serif mb-6 leading-relaxed">
          Signing up with Habot opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="flex items-center gap-3 text-white py-2 px-4 bg-green-600 hover:bg-green-700 transition duration-300 rounded-md">
          <span>Sign up Today!</span>
          <FaLongArrowAltRight />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4  w-full md:w-1/2">
        <PlaceCard place={"Abu Dhabi"} />
        <PlaceCard place={"Dubai"} />
        <PlaceCard place={"Sharjah & Al Ain"} />
        <PlaceCard place={"Fujairah"} />
        <PlaceCard place={"Ras Al Khaimah"} />
        <PlaceCard place={"Umm Al Quwain"} />
      </div>
    </div>
  );
};

export default ChoosePlace;
