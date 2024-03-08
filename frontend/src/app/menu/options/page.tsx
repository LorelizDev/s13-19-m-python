import React from "react";

import { FoodMenu } from "@/components/widgets/food_menu_display";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SuccessDialog } from "@/components/widgets/success_dialog";

type Props = { searchParams: { [key: string]: string } };
export default function page({ searchParams }: Props) {
  const { category } = searchParams;

  return (
    <ScrollArea className="w-full h-[85%] mt-24 flex ">
      <FoodMenu category={category} />
      <SuccessDialog />
    </ScrollArea>
  );
}
