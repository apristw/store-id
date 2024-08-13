import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";

const Index = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto h-auto flex gap-5 mt-12 mb-28">
      <div className="w-1/2 flex gap-3">
        <div className="w-1/4 flex flex-col gap-3">
          <div className="relative w-full h-[168px] rounded-xl overflow-hidden">
            <Image
              src="/image7.png"
              alt="image product"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-full h-[168px] rounded-xl overflow-hidden">
            <Image
              src="/image7.png"
              alt="image product"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative w-full h-[168px] rounded-xl overflow-hidden">
            <Image
              src="/image7.png"
              alt="image product"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="w-3/4">
          <div className="relative w-full h-[530px] rounded-2xl overflow-hidden">
            <Image
              src="/image7.png"
              alt="image product"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4 uppercase">
          One Life Graphic T-shirt
        </h1>
        <div className="text-yellow-500 flex text-xl mb-3">
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
        </div>
        <p className="text-4xl font-bold mb-5">$260</p>
        <p className="text-muted-foreground">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <hr className="w-full my-3" />
        <div className="">
          <p className="text-muted-foreground mb-2">Select Colors</p>
          <div className="flex gap-5 mb-6">
            <div className="h-8 w-8 rounded-full cursor-pointer bg-red-600 flex items-center justify-center">
              <FaCheck className="text-white font-semibold" />
            </div>
            <div className="h-8 w-8 rounded-full cursor-pointer bg-gray-600"></div>
            <div className="h-8 w-8 rounded-full cursor-pointer bg-yellow-600"></div>
          </div>
        </div>
        <hr className="w-full my-3" />
        <p className="text-muted-foreground mb-2">Choose Size</p>
        <div className="flex gap-5 ">
          <Button
            variant="secondary"
            className="rounded-full text-muted-foreground px-6"
          >
            Small
          </Button>

          <Button
            variant="secondary"
            className="rounded-full text-muted-foreground px-6"
          >
            Medium
          </Button>

          <Button
            variant="secondary"
            className="rounded-full text-muted-foreground px-6"
          >
            Large
          </Button>

          <Button
            variant="secondary"
            className="rounded-full text-muted-foreground px-6"
          >
            Extra Large
          </Button>
        </div>
        <hr className="w-full my-3" />
        <div className="flex w-full items-center justify-between gap-5">
          <div className="flex">
            <div className="h-10 w-10 bg-slate-200 flex items-center justify-center rounded-l-full text-lg hover:bg-slate-400 cursor-pointer">
              -
            </div>
            <div className="h-10 w-10 bg-slate-200 flex items-center justify-center text-lg">
              0
            </div>
            <div className="h-10 w-10 bg-slate-200 flex items-center justify-center rounded-r-full text-lg hover:bg-slate-400 cursor-pointer">
              +
            </div>
          </div>
          <Button className="w-full rounded-full">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
