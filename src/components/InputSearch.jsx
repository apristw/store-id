import React from "react";
import { Input } from "@/components/ui/input";

const InputSearch = () => {
  return (
    <div className="flex flex-grow">
      <Input
        className="rounded-full w-full"
        placeholder="Search For Product..."
      />
    </div>
  );
};

export default InputSearch;
