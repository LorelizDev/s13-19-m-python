"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import React from "react";
import { ProductType } from "../food_menu_display";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = { products: ProductType[] };

export default function TotalCard({ products }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="w-80 h-full flex flex-col gap-5 bg-accent/60 p-5">
        <div className="flex justify-between">
          <Text type="regular">Items pedidos</Text>
          <Text type="semi-bold">{products.length}</Text>
        </div>
        <div className="flex justify-between">
          <Text type="regular">Subtotal</Text>
          <Text type="semi-bold">
            {products.reduce((total, product) => total + product.price, 0)}
          </Text>
        </div>
        <div className="flex justify-between">
          <Text type="regular">Descuentos</Text>
          <Text type="regular">0</Text>
        </div>
        <div className="flex justify-between">
          <Text type="regular">Total</Text>
          <Text type="regular">
            {" "}
            {products.reduce((total, product) => total + product.price, 0)}
          </Text>
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
