import React from "react";
import { FoodMenu } from "@/components/widgets/food_menu_display";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartModal from "@/components/widgets/cart/CartModal";

type Props = {};
export default function page({}: Props) {

  return (
    <ScrollArea className="w-full h-[85%] mt-24 flex ">
      <FoodMenu />
      <CartModal />
    </ScrollArea>
  );
}
