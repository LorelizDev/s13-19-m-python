"use client";

import React from "react";
import Image from "next/image";

import { ProductType } from "./types";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useCartState } from "@/state/cart.store";
import { usePersonsState } from "../../../state/persons.store";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  product: ProductType;
};

export function FoodCard({ product }: Props) {
  const { addProduct } = useCartState((state) => state);
  const { persons } = usePersonsState((state) => state);
  const { toast } = useToast();

  const selectedPerson = persons.filter((person) => person.selected);
  function handleAddProduct(product: ProductType) {
    if (persons.some((person) => person.name !== "")) {
      if (persons.some((person) => person.selected === true)) {
        addProduct(product);
      } else {
        toast({
          title: "Selecciona el comensal que realiza esta orden",
          description:
            "Da click sobre el avatar o nombre del comensal que quiere ordenar este producto, recuerda cambiarlo cada vez que la orden sea para otra persona.",
        });
      }
    } else {
      toast({
        title: "Registra un comensal",
        description:
          "Debe haber mínimo un comensal registrado para poder agregar un producto. Ve a 'mesa' para registrarte.",
      });
    }
  }

  if (product) {
    return (
      <li className="w-fit">
        <div className="w-56 h-40">
          {product?.image && (
            /* eslint-disable */
            <img
              className="items-center rounded-lg object-cover object-bottom aspect-video"
              src={`/${product?.image}`}
              alt={product?.product_name}

            />
             /* eslint-enable */
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
      </li>
    );
  }
}
