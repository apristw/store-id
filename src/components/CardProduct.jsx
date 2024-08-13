import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidStar } from "react-icons/bi";

const CardProduct = () => {
  const router = useRouter();
  return (
    <div className="w-auto" onClick={() => router.push("/singlepage")}>
      <div className="relative h-72 w-72 rounded-2xl overflow-hidden mb-4">
        <Image src="/image7.png" fill style={{ objectFit: "contain" }} alt="" />
      </div>
      <p className="text-xl font-bold mb-2">T-SHIRT WITH TAPE DETAILS</p>
      <div className="flex items-center mb-3">
        <div className="text-yellow-500 flex text-xl mr-3">
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
        </div>
        <p className="text-muted-foreground">5/5</p>
      </div>
      <p className="text-2xl font-bold">$120</p>
    </div>
  );
};

export default CardProduct;
