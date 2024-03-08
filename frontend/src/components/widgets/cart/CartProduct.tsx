"use client";

import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import { Text } from "../../ui/text";
import { Icon } from "@/components/ui/icon";
import { ProductType, useCartState } from "@/state/cart.store";

type Props = {
  product: ProductType;
};

export default function CartProduct({ product }: Props) {
  const { deleteProduct, addProduct, deleteAll } = useCartState((state) => state);

  const handleDecrease = () => {
    if (product.quantity && product.quantity > 1) {
      // Si la cantidad es mayor que 1, disminuir en 1
      deleteProduct(product.id);
    } else {
      // Si la cantidad es 1 o indefinida, eliminar el producto del carrito
      deleteProduct(product.id);
    }
  };

  const handleIncrease = () => {
    // Aumentar la cantidad en 1
    addProduct({ ...product, quantity: (product.quantity || 0) + 1 });
  };

  return (
    <div>
      <Card className="flex justify-center items-center bg-card border-none px-5 py-2">
        <div className="w-1/3 h-full">
          {product?.image && (
            <Image
            src={`https://res.cloudinary.com/dbs6ntoya/${product?.image}`}
              width={80}
              height={60}
              alt={`foto de ${product?.product_name}`}
              className="rounded-lg"
            />
          )}
        </div>
        <div className="w-1/3 h-full flex flex-col justify-between">
          <Text type="semi-bold" className="line-clamp-1">{product?.product_name}</Text>
          <Text type="semi-bold">${product?.price}</Text>
        </div>
        <div className="w-1/3 h-16 flex flex-col justify-between items-end">
          <Icon
            iconName="trash"
            size="lg"
            className="text-white"
            onClick={() => deleteAll(product.id)}
          />
          <div className="w-16 flex justify-evenly  border border-gray-400  rounded-sm  *:text-center data-[slot=clickable]:*:cursor-pointer *:text-white ">
            <div data-slot="clickable" onClick={handleDecrease}>
              -
            </div>
            <div>{product?.quantity ? product.quantity : 0}</div>
            <div data-slot="clickable" onClick={handleIncrease}>
              +
            </div>
          </div>
        </div>
      </Card>
      <div className="h-5"></div>
    </div>
  );
}