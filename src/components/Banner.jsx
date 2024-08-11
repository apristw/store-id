import React from "react";
import { GoMail } from "react-icons/go";
import InputSearch from "./InputSearch";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto flex flex-row mt-10 border-2 rounded-3xl py-10 px-16 bg-black ">
      <div className="w-[55%] px-5">
        <p className="text-[40px] text-white font-black leading-none">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
      </div>
      <div className="w-[45%] px-10 flex flex-col gap-3">
        <div className="flex flex-grow bg-white items-center border-2 px-2 rounded-full overflow-hidden">
          <span>
            <GoMail className="text-slate-400 ml-3 mr-2 text-[24px]" />
          </span>
          <input
            type="text"
            className="w-full border-none focus:outline-none focus:border-none px-2 py-2"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className="">
          <Button
            variant="secondary"
            className="rounded-full w-full px-2 py-2 text-lg"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
