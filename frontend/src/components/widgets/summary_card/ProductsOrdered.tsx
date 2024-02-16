import React from "react";
import { Stack } from "../../layout/stack";
import content from "./content.json";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";
import { Text } from "../../ui/text";

type Props = {
  products: {
    id: number;
    img: string;
    name: string;
    price: number | string;
    orderedBy: string;
    quantity: number;
  }[];
};

export const ProductsOrdered = ({ products }: Props) => {
  return (
    <Stack distribution="vertical">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="w-full flex justify-between items-center gap-10"
          >
            <div className="relative ">
              <Image
                src={product.img}
                alt={product.name + "image"}
                width={80}
                height={80}                
                placeholder="blur"
                blurDataURL={
                  "https://th.bing.com/th/id/R.1632e46a5c79d43f3125ca62c54189cb?rik=5hQZZnvc9%2fkl6w&pid=ImgRaw&r=0"
                }
                className="w-auto h-auto rounded-md cursor-pointer"
              />
            </div>

            <div className="w-5/6 h-full  flex flex-col justify-between">
              <div className="w-fit flex flex-col cursor-pointer group ">
                <Text type="subtitle">{product.name} asdeasd deasde</Text>
                <span className="w-0 h-[2px] mb-1 bg-blue-400 group-hover:w-full  origin-left transition-all duration-300"></span>
              </div>
              <Text type="regular">
                Cantidad: <span className="font-bold">{product.quantity}</span>
              </Text>
              <div className="flex justify-between">
                <div className="w-9/12">
                  {" "}
                  <p className="mt-2">
                    Ordenado por:{" "}
                    <span className="font-bold text-foreground">
                      {product.orderedBy}
                    </span>
                  </p>
                  {product.id !== products.length && <hr className="mt-5 " />}
                </div>

                <p
                  className={cn(
                    buttonVariants({
                      variant: "secondary",
                      className: "rounded-full",
                    }),
                    "text-foreground  font-bold select-none "
                  )}
                >
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Stack>
  );
};
