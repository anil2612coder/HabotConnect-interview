import React from "react";

import WorkCard from "./WorkCard";
import { FaUserPlus } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { PiHandshakeFill } from "react-icons/pi";
import { SiLibreofficewriter } from "react-icons/si";
import { GrDocumentUser } from "react-icons/gr";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Works = () => {
  return (
    <div className=" flex flex-col w-4/5 m-auto justify-center items-center mt-16 gap-6">
      <div className="font-extrabold font-sans text-4xl">How it works?</div>

      <div className="flex flex-col gap-1 justify-center items-center font-semibold text-gray-700">
        <p>
          Buyers post their and review top suppliers, while suppliers complete
          profiles, connect with
        </p>
        <p>
          potential buyers, and build successful bussiness, sharing valuable
          feedback
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-col-1  gap-4 sm:grid-cols-2 ">
        <WorkCard
          background={"bg-blue-300"}
          image={<FaUserPlus className="text-6xl" />}
          first={"Select Your Role and"}
          second={"sign up"}
        />
        <WorkCard
          image={<IoDocumentTextSharp className="text-6xl" />}
          first={"Buyers Post Your"}
          second={"Requirments"}
        />
        <WorkCard
          background={"bg-blue-300"}
          image={<HiClipboardDocumentList className="text-6xl" />}
          first={"Review ,Select, and"}
          second={"Contect the Best Suppliers"}
        />
        <WorkCard
          image={<SiLibreofficewriter className="text-6xl" />}
          first={"Contect to Buyers and share"}
          second={"Your quote for the Service"}
        />
        <WorkCard
          background={"bg-blue-300"}
          image={<GrDocumentUser className="text-6xl" />}
          first={"Suppliers Complete your "}
          second={"Profile and get notify opportunities"}
        />
        <WorkCard
          image={<PiHandshakeFill className="text-6xl" />}
          first={"Both the Parties can Contect and"}
          second={"Make Bussiness and leave feedback"}
        />
      </div>
    </div>
  );
};

export default Works;
