import React from "react";
import CardCarousel from "./CardCarousel";

const Testimonial = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto">
      <h2 className="mt-16 text-5xl font-bold">OUR HAPPY CUSTOMERS</h2>
      <div className="w-full flex gap-5">
        <CardCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
