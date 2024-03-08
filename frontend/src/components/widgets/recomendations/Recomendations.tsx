"use client";

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
import Image from "next/image";
import content from "@/components/widgets/recomendations/content.json";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-5"
        >
          <CarouselContent className="h-full">
            {content.recommendations.map((recommendation) => (
              <motion.div
                variants={listItem}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={recommendation.id}
              >
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-full">
                  <Link
                    href={`/products/${recommendation.id}`}
                    className="p-1 w-96 h-44 bg-card rounded-2xl flex items-center px-5 cursor-pointer"
                  >
                    {/* eslint-disable */}
                    <Image
                      src={recommendation.image}
                      alt="imagen de producto"
                      width={176}
                      height={144}
                      className="w-44 h-36 bg-gray-50 rounded-xl aspect-video"
                    />
                    {/* eslint-enable */}
                    <div className="self-start mt-7 ml-5">
                      <p>{recommendation.name}</p>
                      <div className="flex">
                        {Array.from({ length: recommendation.rating }).map(
                          (_, i) => (
                            <Icon
                              key={i}
                              iconName="star"
                              className="text-yellow-500"
                            />
                          )
                        )}
                      </div>
                      <p className="line-clamp-2">
                        {recommendation.description}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>
        </motion.div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
("/images/pepe");
