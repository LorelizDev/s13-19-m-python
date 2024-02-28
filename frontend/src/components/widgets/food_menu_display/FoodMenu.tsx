import React from "react";
import content from "./content.json";
import { FoodCard } from "./FoodCard";

type Props = {};

export function FoodMenu({}: Props) {
  return (
    <div
      id="part2"
      className="w-full bg-accent overflow-hidden"
    >
      <div className="flex flex-col h-2/3 gap-5 my-4 ml-6 mt-6 text-xl text-white ">
        <div>
          <ul className="flex flex-wrap justify-start gap-x-10 gap-y-10">
            {content.items.map((product) => (
              <FoodCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
