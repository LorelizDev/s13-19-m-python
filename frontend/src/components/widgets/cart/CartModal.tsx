"use client";

import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartButton } from "../food_menu_display";
import { Text } from "@/components/ui/text";
import { useCartState } from "@/state/cart.store";
import CartProduct from "./CartProduct";
import TotalCard from "./TotalCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";

type Props = {};

export function CartModal({}: Props) {
  const { productsInCart } = useCartState((state) => state);
  return (
    <Sheet>
      <SheetTrigger>
        <CartButton />
      </SheetTrigger>
      <SheetContent className="h-screen bg-card/60 bg-blend-multiply backdrop-blur-md">
        <SheetHeader>
          <SheetTitle>
            <Text type="title">orden</Text>
          </SheetTitle>
          <div className="h-screen flex flex-col justify-between">
            <ScrollArea className="h-4/6 flex flex-col gap-10">
              {productsInCart.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
              <ScrollBar orientation="vertical" />
            </ScrollArea>
            <div className="h-2/6 mb-24">
              <TotalCard products={productsInCart} />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
