import React from "react";
import { ProductType } from "./types";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

type Props = {
  product: ProductType;
};

export function FoodCard({ product }: Props) {
  return (
    <li className="w-fit">
      <div className="w-56 h-40">
        <Image
          className="items-center rounded-lg object-cover object-bottom aspect-video"
          src={product.imagen}
          alt={product.name}
          width={224}
          height={160}
        />
      </div>
      <div className="pb-5">
        <Text type="subtitle">{product.name}</Text>
        <Text type="small">{product.detalle}</Text>
      </div>

      <div className="flex justify-between">
        <h2 className="mt-3 flex">${product.precio}</h2>
        <Button variant={"secondary"}>+</Button>
      </div>
    </li>
  );
}
