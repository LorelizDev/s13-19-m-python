"use client";

import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useCartState } from "@/state/cart.store";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { cn } from "../../../lib/utils";
import { Button } from "@/components/ui/button";

type Props = {};
export function CartButton({}: Props) {
  const { newProduct, productsInCart } = useCartState((state) => state);
  return (
    <div className="fixed bottom-5 right-6 size-14 flex items-center bg-card rounded-full">
      <div className="relative w-14 h-14 flex justify-center items-center rounded-full">
        <Badge
          className={cn(
            `absolute top-0 right-0 bg-green-400 text-black ${
              newProduct && "animate-bounce"
            }`
          )}
          >
          {productsInCart.reduce((acum, product) => acum + (product.quantity || 0), 0)}
        </Badge>
        <Icon iconName="cart" size="big" />
      </div>
    </div>
  );
}
