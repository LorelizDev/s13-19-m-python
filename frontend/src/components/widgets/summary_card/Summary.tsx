"use client";

import React from "react";
import content from "./content.json";

import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { ProductsOrdered } from "./ProductsOrdered";
import { useCartState } from "@/state/cart.store";
import { SuccessDialog } from "../success_dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

export const Summary = () => {
  const { productsInCart } = useCartState((state) => state);
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  function handleDialog() {
    setIsOpen(true);
  }

  function handleCloseDialog() {
    setIsOpen(false);
  }
  return (
    <div className="">
      <ScrollArea className="w-full h-screen flex flex-col justify-between gap-2 p-10">
        <Text type="title" className="text-2xl font-bold text-foreground">
          {content.pageTitle}
        </Text>
        <ProductsOrdered products={productsInCart} />

        <div className="flex gap-5">
          <Button
            variant={"secondary"}
            className="w-96 text-md font-bold self-center"
            onClick={handleDialog}
          >
            {content.actionButton1}
          </Button>
          <Button
            variant={"outline"}
            className="w-96 text-md font-bold self-center"
            onClick={() => router.push("/menu")}
          >
            {content.actionButton2}
          </Button>
        </div>

        <SuccessDialog
          handleCloseDialog={handleCloseDialog}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </ScrollArea>
    </div>
  );
};
