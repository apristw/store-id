import Image from "next/image";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import CardProduct from "./CardProduct";
import { Button } from "./ui/button";

const ProductList = ({ title }) => {
  return (
    <div className="max-w-[1240px] mx-auto mt-16 flex flex-col w-full">
      <h2 className="text-5xl font-bold text-center mb-12">{title}</h2>
      <div className="flex justify-center items-center gap-5 mb-9">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <div className="mx-auto">
        <Button
          variant="secondary"
          className="rounded-full w-auto px-16 py-6 text-center hover:outline-2 hover:bg-slate-200"
        >
          View All
        </Button>
      </div>
      <hr className="w-full mt-16" />
    </div>
  );
};

export default ProductList;
