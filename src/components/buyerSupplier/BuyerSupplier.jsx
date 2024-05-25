import React from "react";

const BuyerSupplier = () => {
  return (
    <div className="flex gap-3 flex-col m-auto md:flex-row w-11/12 justify-center items-center bg-slate-900 md:py-8 md:px-6 py-3 px-2">
      <div className="md:w-1/2 w-full">
        <img src="/youtube.avif" alt="youtube video" />
      </div>
      <div className="md:w-1/2 w-full">
        <div className=" flex w-4/5 justify-evenly mb-6">
          <p className="font-bold text-2xl px-6 text-orange-600 border-b-4 border-orange-600 pb-2">
            Buyer
          </p>
          <p className="text-2xl font-semibold text-white">Supplier</p>
        </div>
        <div className=" flex flex-col gap-2 w-11/12">
          <p className="text-white font-sans text-lg flex gap-4">
            <span>
              <img src="/right.png" alt="right" className="w-5" />
            </span>
            <span>Post your requirements.</span>
          </p>
          <p className="text-white font-sans text-lg flex gap-4">
            <span>
              <img src="/right.png" alt="right" className="w-5" />
            </span>
            <span>Sit back for multiple suppliers to contact you.</span>
          </p>
          <p className="text-white font-sans text-lg flex gap-4">
            <span>
              <img src="/right.png" alt="right" className="w-5" />
            </span>
            <span>
              choose among the suppliers based on the raring and reviews.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerSupplier;
