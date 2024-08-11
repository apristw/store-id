import React from "react";
import { BiSolidCheckCircle, BiSolidStar } from "react-icons/bi";

const CardTestimonial = () => {
  return (
    <div className="max-w-[400px] w-full flex flex-col mt-10 p-6 mb-3 border-2 rounded-2xl">
      <div className="text-yellow-500 flex text-xl mb-3">
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
      </div>
      <div className="flex gap-2 items-center mb-3">
        <p className="text-xl font-bold">Sarah M.</p>
        <BiSolidCheckCircle className="text-green-700 text-2xl" />
      </div>
      <p className="text-muted-foreground font-light">
        &apos;I&apos;m blown away by the quality and style of the clothes I
        received from Shop.co. From casual wear to elegant dresses, every piece
        I&apos;ve bought has exceeded my expectations.”
      </p>
    </div>
  );
};

export default CardTestimonial;
