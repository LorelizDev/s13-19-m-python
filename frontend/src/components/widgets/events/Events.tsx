import React from "react";
import content from "@/components/widgets/events/content.json";
import Image from "next/image";
import Link from "next/link";

import { Text } from "@/components/ui/text";
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
          {content.events.map((event, index) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
                <div className="relative p-1 w-[360px] h-[240px] bg-card  rounded-3xl flex justify-center items-center">
                  <Image
                    src={event.image}
                    alt="imagen de producto"
                    fill
                    loading="eager"
                    sizes="(max-width: 1600px) 360px, 240px"
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            </Link>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
