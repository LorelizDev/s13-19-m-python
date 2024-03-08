import React from "react";

import { FoodCard } from "./";
import { API } from "@/fetch/apiConnection";
import { ProductType } from "@/state/cart.store";
import { CartModal } from "../cart";
import { CategoryMap } from "../food_type_display";


const categories: CategoryMap = {
  lunch: "Almuerzo",
  dinner: "Cena",
  snacks: "Merienda",
  breakfast: "Desayuno",
  drink: "Bebida",
};

type Props = {
  category: string;
};

export async function FoodMenu({ category }: Props) {
  const res: ProductType[] = await API.get("/products/products/");
  const products = res.filter((product) =>
    product.categories.includes(categories[category])
  );

  return (
    <div id="part2" className="w-full bg-accent overflow-hidden">
      <div className="flex flex-col h-2/3 gap-5 my-4 ml-6 mt-6 text-xl text-white ">
        <div>
          <div className="flex flex-wrap justify-start gap-x-10 gap-y-10">

            {products &&
              products.map((product: ProductType) => (
                <div key={product.id}>
                  <FoodCard product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <CartModal />
    </div>
  );
}
