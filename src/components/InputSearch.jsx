import React from "react";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";

const InputSearch = () => {
  return (
    <div className="flex flex-grow items-center border-2 px-2 rounded-full overflow-hidden">
      <span>
        <BiSearch className="text-slate-300 text-2xl mx-1" />
      </span>
      <input
        type="text"
        className="w-full border-none focus:outline-none focus:border-none px-2 py-2"
        placeholder="Search For Product..."
      />
    </div>
  );
};

export default InputSearch;
