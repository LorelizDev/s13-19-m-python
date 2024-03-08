import React from "react";
import content from "@/components/widgets/recomendations/content.json";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";

type Props = {};

export function Recommendations({}: Props) {
  return (
    <div className="space-y-3">
      <Text type="title">Recomendaciones del chef</Text>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full h-fit "
      >
        <div>
          <CarouselContent className="h-full">
            {content.recommendations.map((recommendation) => (
              <div key={recommendation.id}>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
                  <Link
                    href={`/products/${recommendation.id}`}
                    className="p-1 w-96 h-44 bg-card rounded-2xl flex items-center px-5 cursor-pointer"
                  >
                    {/* eslint-disable */}
                    <div className="relative w-[176px] h-[124px] rounded-xl overflow-hidden">
                      <Image
                        src={recommendation.image}
                        alt="imagen de producto"
                        fill
                        loading="eager"
                        sizes="(max-width: 1600px) 176px, 124px"
                        className="object-cover"
                      />
                    </div>
                    {/* eslint-enable */}
                    <div className="self-start mt-7 ml-5">
                      <p className="line-clamp-1">{recommendation.name}</p>
                      <div className="flex">
                        {Array.from({ length: recommendation.rating }).map(
                          (_, i) => (
                            <Icon
                              key={i}
                              iconName="star"
                              className="text-yellow-500"
                              size="big"
                            />
                          )
                        )}
                      </div>
                      <p className="line-clamp-2 text-sm">
                        {recommendation.description}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              </div>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
