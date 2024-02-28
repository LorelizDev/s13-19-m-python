import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
type Props = {};

export function Recommendations({}: Props) {
  return (
    <div className="space-y-3">
      <Text type="title" >Recomendaciones del chef</Text>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full h-fit "
      >
        <CarouselContent className="h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 h-full"
            >
              <div className="p-1 w-96 h-44 bg-card rounded-2xl flex items-center px-5">
                {/* eslint-disable */}
                <img
                  src="/"
                  alt="imagen de producto"
                  className="w-44 h-36 bg-gray-50 rounded-xl"
                />
                {/* eslint-enable */}
                <div className="self-start mt-7 ml-5">
                  <p>nombre producto</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        iconName="star"
                        className="text-yellow-500"
                      />
                    ))}
                  </div>
                  <p>descripcion</p>
                </div>
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
"/images/pepe"