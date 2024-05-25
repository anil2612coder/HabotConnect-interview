import React from "react";

const PlaceCard = ({ place }) => {
  return (
    <div className="border border-red-300 rounded-lg shadow-md p-4 text-lg text-center bg-white hover:shadow-lg transition duration-300">
      {place}
    </div>
  );
};

export default PlaceCard;
