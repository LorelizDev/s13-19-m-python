import { Text } from "@/components/ui/text";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

export function Events({}: Props) {
  return (
    <div className="space-y-3">
      <Text type="title">eventos</Text>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full h-fit "
      >
        <CarouselContent className="h-full pl-20 space-x-28">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 h-full"
            >
              <div className="p-1 w-[500px] h-60 bg-card  rounded-3xl flex justify-center items-center">
                Aquí va la imagen
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
