import React from "react";
import CartModal from "@/components/widgets/cart/CartModal";

import { FoodMenu } from "@/components/widgets/food_menu_display";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CurrentUser } from "@/components/widgets/current_user";

type Props = {};
export default function page({}: Props) {
  return (
    <ScrollArea className="w-full h-[85%] mt-24 flex ">
      <FoodMenu />
      <CurrentUser />
      <CartModal />
    </ScrollArea>
  );
}
