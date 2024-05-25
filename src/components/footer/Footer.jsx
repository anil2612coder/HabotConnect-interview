import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-16 bg-slate-900 mt-24">
      <div className="flex flex-col-reverse gap-8 justify-center items-center md:flex-row md:justify-around">
        <div>
          <img src="/logo.png" alt="logo" className="md:w-44  w-28 sm:w-36" />
          <p className="text-gray-400">&copy; R Singhania</p>
        </div>
        <div className="flex md:gap-8 gap-2">
          <div>
            <p className="font-medium text-white">Company</p>
            <p className="text-gray-300">About</p>
            <p className="text-gray-300">Faq</p>
          </div>
          <div>
            <p className="font-medium text-white">Terms</p>
            <p className="text-gray-300">Data privacy</p>
            <p className="text-gray-300">Terms</p>
            <p className="text-gray-300">Accessibility</p>
          </div>
          <div>
            <p className="font-medium text-white">Related</p>
            <p className="text-gray-300">Find Buyer</p>
            <p className="text-gray-300">Feedback</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <FaGithub className="border-[1px] text-white w-10 h-10 rounded-full p-2" />
          </div>
          <div>
            <FaLinkedin className="border-[1px] text-white w-10 h-10 rounded-full p-2" />
          </div>
          <div>
            <FaTwitter className="border-[1px] text-white w-10 h-10 rounded-full p-2" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
