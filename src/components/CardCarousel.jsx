import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardTestimonial from "./CardTestimonial";

const CardCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[1240px] mx-auto"
    >
      <div className="relative">
        <div className="absolute right-12">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <CardTestimonial />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CardCarousel;
