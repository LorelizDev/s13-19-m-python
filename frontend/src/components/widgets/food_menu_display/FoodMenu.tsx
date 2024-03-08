import React from "react";
import { FoodCard } from "./";
import { API } from "@/fetch/apiConnection";
import { ProductType } from "@/state/cart.store";

type Props = {};

export async function FoodMenu({}: Props) {
  
  /*   
  const formData = await setFormData()
  console.log(await API.post("/products/products/", formData));
  */   

  const products: ProductType[] = await API.get("/products/products/");
  console.log(products)

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
