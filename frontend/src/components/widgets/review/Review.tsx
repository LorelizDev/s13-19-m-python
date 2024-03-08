import React from "react";
import Image from "next/image";
import content from "./content.json";

import { Icon } from "@/components/ui/icon";
import { API } from "@/fetch/apiConnection";

type Props = {};

export async function Review({}: Props) {
  const res = await API.get("/products/products");
  const selected = res.slice(0, 6);
  const names = selected.map((product: any) => product.product_name);
  const images = selected.map((product: any) => product.image);
  
  return (
    <div className="flex justify-center items-center">
      <div className="mx-auto flex flex-wrap gap-10 justify-center">
        <div className="w-[80vw] flex flex-wrap gap-10 justify-evenly">
          {content.reviews.map((review, i) => (
            <div key={review.id} className="">
              <div className="p-1 w-96 h-44 bg-card rounded-2xl flex items-center px-5 cursor-pointer">
                {/* eslint-disable */}
                <div className="relative w-[176px] min-w-[176px] h-[124px] rounded-xl overflow-hidden">
                  <Image
                    className="items-center rounded-lg object-cover object-bottom aspect-video"
                    src={`https://res.cloudinary.com/dbs6ntoya/${images[i]}`}
                    alt={"imagen de producto"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 220px, 191px"
                  />
                </div>
                {/* eslint-enable */}
                <div className="self-start mt-7 ml-5">
                  <p className="line-clamp-1">{names[i]}</p>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon
                        key={i}
                        iconName="star"
                        className="text-yellow-500"
                        size="big"
                      />
                    ))}
                  </div>
                  <p className="line-clamp-2 text-sm">{review.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
