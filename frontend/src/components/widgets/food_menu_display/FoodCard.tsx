"use client";

import React from "react";
import Image from "next/image";

import { ProductType } from "./types";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useCartState } from "@/state/cart.store";

type Props = {
  product: ProductType;
};

export function FoodCard({ product }: Props) {
  const { addProduct } = useCartState((state) => state);

  function handleAddProduct(product: ProductType) {
    addProduct(product);
  }

  if (product) {
    return (
      <div className="w-[230px] h-[350px] flex flex-col justify-between">
        <div className="relative w-[220px] h-[191px]">
          {product?.image && (
            <Image
              className="items-center rounded-lg object-cover object-bottom aspect-video"
              src={`https://res.cloudinary.com/dbs6ntoya/${product?.image}`}
              alt={product?.product_name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 220px, 191px"
            />
          )}
        </div>
        <div className="pb-5">
          <Text type="subtitle">{product?.product_name}</Text>
          <Text type="small">{product?.description}</Text>
        </div>

        <div className="flex justify-between">
          <h2 className="mt-3 flex">${product?.price}</h2>
          <Button
            variant={"secondary"}
            onClick={() => handleAddProduct(product)}
          >
            +
          </Button>
        </div>
      </div>
    );
  }
}
