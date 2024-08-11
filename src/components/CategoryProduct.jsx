import Image from "next/image";
import React from "react";

const CategoryProduct = () => {
  return (
    <div className="max-w-[1240px] w-full h-[826px] mt-[70px] mx-auto flex flex-col bg-gray-200 rounded-3xl">
      <h2 className="mt-16 text-5xl font-bold text-center">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="flex flex-col gap-5 mt-11">
        <div className="w-full gap-5 h-72 px-16 flex justify-between">
          <div className="relative h-full max-w-full w-[35%] border-2 rounded-2xl overflow-hidden">
            <Image
              src="/cat1.png"
              alt="cat1"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative h-full max-w-full w-[65%] border-2 2 rounded-2xl">
            <Image
              src="/cat2.png"
              alt="cat2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="w-full gap-5 h-72 px-16 flex justify-between flex-row-reverse">
          <div className="relative h-full max-w-full w-[35%] border-2 rounded-2xl overflow-hidden">
            <Image
              src="/cat4.png"
              alt="cat4"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative h-full max-w-full w-[65%] border-2 2 rounded-2xl">
            <Image
              src="/cat3.png"
              alt="cat3"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
