"use client";

import React from "react";
import { ProductType } from "./types";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useCartState } from "@/state/cart.store";

type Props = {
  product: ProductType;
};

export function FoodCard({ product }: Props) {
  const { addProduct } = useCartState((state) => state);

  if (product) {
    return (
      <li className="w-fit">
        <div className="w-56 h-40">
          {product?.image && (
            <Image
              className="items-center rounded-lg object-cover object-bottom aspect-video"
              src={product?.image}
              alt={product?.product_name}
              width={224}
              height={160}
            />
          )}
        </div>
        <div className="pb-5">
          <Text type="subtitle">{product?.product_name}</Text>
          <Text type="small">{product?.description}</Text>
        </div>

        <div className="flex justify-between">
          <h2 className="mt-3 flex">${product?.price}</h2>
          <Button variant={"secondary"} onClick={() => addProduct(product)}>
            +
          </Button>
        </div>
      </li>
    );
  }
}
