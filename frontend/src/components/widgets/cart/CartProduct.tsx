"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { ProductType } from "../food_menu_display";
import Image from "next/image";
import { Text } from "../../ui/text";
import { Icon } from "@/components/ui/icon";

type Props = {
  product: ProductType;
};

export default function CartProduct({ product }: Props) {
  return (
    <div>
      <Card className="flex justify-center items-center bg-accent/30 border-none px-5">
        <div className="w-1/3 h-full">
          {product?.image && (
            <Image
              src={product?.image}
              width={80}
              height={60}
              alt={`foto de ${product?.product_name}`}
              className="rounded-lg"
            />
          )}
        </div>
        <div className="w-1/3 h-full flex flex-col justify-between">
          <Text type="semi-bold">{product?.product_name}</Text>
          <Text type="semi-bold">${product?.price}</Text>
        </div>
        <div className="w-1/3 h-16 flex flex-col justify-between items-end">
          <Icon iconName="trash" size="lg" className="text-white" />
          <div className="w-16 flex justify-evenly  border border-gray-400  rounded-sm  *:text-center data-[slot=clickable]:*:cursor-pointer *:text-white ">
            <div data-slot="clickable">-</div>
            <div>0</div>
            <div data-slot="clickable">+</div>
          </div>
        </div>
      </Card>
      <div className="h-5"></div>
    </div>
  );
}
