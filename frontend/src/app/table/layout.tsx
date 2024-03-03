import React from "react";
import { MainPageLayout } from "@/components/layout/MainPage.Layout";
import { FoodTypes } from "@/components/widgets/food_type_display";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <MainPageLayout  >
      {children}
    </MainPageLayout>
  );
}
