"use client";

import React from "react";
import content from "./content.json";

import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { ProductsOrdered } from "./ProductsOrdered";
import { useCartState } from "@/state/cart.store";

export const Summary = () => {
  const { productsInCart } = useCartState((state) => state);

  return (
    <div className="w-full h-screen flex flex-col justify-between gap-2 p-10">
      <Text type="title" className="text-2xl font-bold text-foreground">
        {content.pageTitle}
      </Text>
      <ProductsOrdered products={productsInCart} />

      <Button
        variant={"secondary"}
        className="w-96 text-md font-bold self-center"
      >
        {content.actionButton}
      </Button>
    </div>
  );
};
