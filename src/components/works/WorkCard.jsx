import React from "react";

const WorkCard = ({ background, image, first, second }) => {
  return (
    <div
      className={`${background} w-72 py-4 flex flex-col justify-center items-center  px-4`}
    >
      <div className="mb-4">{image}</div>
      <p className="font-medium text-base font-serif">{first}</p>
      <p className="font-medium text-base font-serif">{second}</p>
    </div>
  );
};

export default WorkCard;
