import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";
import { Text } from "../../ui/text";
import { Stack } from "@/components/layout/stack";
import { ProductType } from "@/state/cart.store";

type Props = {
  products: ProductType[];
};

export const ProductsOrdered = ({ products }: Props) => {
  return (
    <Stack distribution="vertical">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="w-full mb-5 flex justify-between items-center gap-10"
          >
            <div className="relative self-start size-20 overflow-hidden">
              {product?.image && (
                <Image
                  className="items-center rounded-lg object-cover object-bottom aspect-video"
                  src={`https://res.cloudinary.com/dbs6ntoya/${product?.image}`}
                  alt={product?.product_name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 220px, 191px"
                />
              )}
            </div>

            <div className="w-5/6 h-full  flex flex-col justify-between">
              <div className="w-fit flex flex-col cursor-pointer group ">
                <Text type="subtitle">{product.product_name}</Text>
                <span className="w-0 h-[2px] mb-1 bg-blue-400 group-hover:w-full  origin-left transition-width duration-300"></span>
              </div>
              <Text type="regular">
                Cantidad: <span>{product.quantity?.toFixed(0)}</span>{" "}
              </Text>
              <div className="flex justify-between">
                <div className="w-9/12">
                  {" "}
                  <p className="mt-2">

                    <span className="font-bold text-foreground"></span>
                  </p>
                  {product.id !== products.length && <hr className="mt-5 " />}
                </div>

                <p
                  className={cn(
                    buttonVariants({
                      variant: "secondary",
                      className: "rounded-full",
                    }),
                    "font-bold select-none leading-6 "
                  )}
                >
                  ${product?.quantity && Math.round(product.price) * product?.quantity}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Stack>
  );
};
