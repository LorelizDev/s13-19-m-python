"use client";

import { Text } from "@/components/ui/text";
import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProductType } from "@/state/cart.store";
import { buttonVariants } from "@/components/ui/button";

type Props = { products: ProductType[] };

export default function TotalCard({ products }: Props) {
  // Calcular la cantidad total de productos pedidos
  const totalItems = products.reduce(
    (total, product) => total + (product.quantity || 0),
    0
  );

  // Calcular la suma total de precios
  const totalPrice = products.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="w-80 h-full flex flex-col gap-5 bg-accent/60 p-5">
        <div className="flex justify-between">
          <Text type="regular">Items pedidos</Text>
          <Text type="semi-bold">{totalItems}</Text>
        </div>
        <div className="flex justify-between">
          <Text type="regular">Subtotal</Text>
          <Text type="semi-bold">{totalPrice}</Text>
        </div>
        <div className="flex justify-between">
          <Text type="regular">Descuentos</Text>
          <Text type="regular">0</Text>
        </div>
        <div className="flex justify-between">
          <Text type="regular">Total</Text>
          <Text type="regular">{totalPrice}</Text>
        </div>
      </div>
      <Link
        href={"/summary"}
        className={cn(buttonVariants({ variant: "default" }))}
      >
        <Text type="semi-bold">Pagar</Text>
      </Link>
    </div>
  );
}
