import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative max-w-[1440px] w-full mx-auto ">
      <div className="relative h-[663px] ">
        <Image src="/heroImg.jpg" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-0 left-0 h-full px-10 max-w-[1440px] w-1/2 flex items-center justify-center">
        <div className="relative h-auto">
          <h2 className="text-[64px] font-black leading-none mb-3">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-[16px] text-muted-foreground mt-4 mb-5">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <div className="">
            <Button className="rounded-full w-auto px-16 py-6">Shop Now</Button>
          </div>
          <div className="flex flex-row items-center justify-between gap-8 mt-12 w-full">
            <article className="w-full border-r-[2px]">
              <p className="text-[40px] font-bold">200+</p>
              <p className="text-base font-light">International Brand</p>
            </article>
            <article className="w-full border-r-[2px]">
              <p className="text-[40px] font-bold">2,000+</p>
              <p className="text-base font-light">High-Quality Products</p>
            </article>
            <article className="w-full ">
              <p className="text-[40px] font-bold">30,000+</p>
              <p className="text-base font-light">Happy Customers</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
