"use client";

import React from "react";
import content from "./content.json";

import { Button, buttonVariants } from "../../ui/button";
import { Text } from "../../ui/text";
import { ProductsOrdered } from "./ProductsOrdered";
import { useCartState } from "@/state/cart.store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaymentModalType } from "@/state/paymentModal.store";
import { usePaymentModal } from "../../../state/paymentModal.store";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Summary = () => {
  const { productsInCart } = useCartState((state) => state);

  return (
    <div className="h-screen">
      <ScrollArea className="w-full h-5/6 flex flex-col justify-between gap-2 p-10">
        <Text type="title" className="text-2xl font-bold text-foreground mb-20">
          {content.pageTitle}
        </Text>
        <ProductsOrdered products={productsInCart} />
      </ScrollArea>
      <div className="flex h-1/6 justify-center gap-5">
        <Link
          href={"/payment-methods"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-96 text-md font-bold self-center"
          )}
        >
          confirmar
        </Link>
        <Button
          variant={"outline"}
          className="w-96 text-md font-bold self-center"
        >
          Seguir ordenando
        </Button>
      </div>
    </div>
  );
};
