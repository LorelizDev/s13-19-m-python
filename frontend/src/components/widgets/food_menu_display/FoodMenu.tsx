import React from "react";
import { FoodCard } from "./";
import { API } from "@/fetch/apiConnection";
import { ProductType } from "@/state/cart.store";
import ensaladaPollo from '../../../../public/products/EnsaladPollo.webp'

const newProducts = {
  categories: ["Almuerzo", "Cena", "Plato principal"],
  product_name: "Milanesa2",
  image: ensaladaPollo,
  description: "Prueba de comida en este caso milanesa2",
  price: 2000,
};

type Props = {};

export async function FoodMenu({}: Props) {
  /* console.log(await API.post("/category/products/", newProducts)) */
  const products: ProductType[] = await API.get("/products/products/");


  return (
    <div id="part2" className="w-full bg-accent overflow-hidden">
      <div className="flex flex-col h-2/3 gap-5 my-4 ml-6 mt-6 text-xl text-white ">
        <div>
          <ul className="flex flex-wrap justify-start gap-x-10 gap-y-10">
            {products &&
              products.map((product: ProductType) => (
                <FoodCard key={product.id} product={product} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
