import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
const HeroForm = () => {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    console.log("Service:", service);
    console.log("Location:", location);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full h-3/5 ">
        <img
          src="/dubai.jpg"
          alt="Background"
          className="w-full h-full object-fit"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative flex flex-col  justify-center items-center h-3/5">
        <h1 className="font-extrabold md:text-3xl text-2xl font-serif mb-2 text-white">
          Are You a Supplier ?
        </h1>
        <p className="md:text-4xl text-2xl text-white font-sans mb-2">
          Expolre Matching Opportunities
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4"
        >
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <MdMail />
            </span>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="Search require service here"
              className="shadow  border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <FaLocationDot />
            </span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search desired location here"
              className="shadow  border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </form>
        <div className="mt-4 flex flex-col gap-2 md:flex-row text-white">
          <div className="font-semibold md:text-lg">Are you a buyer?</div>
          <div className="underline">
            Click here if you are lokking to post a requirements
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
