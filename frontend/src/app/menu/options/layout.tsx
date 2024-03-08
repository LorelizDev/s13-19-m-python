import React from "react";
import { MainPageLayout } from "@/components/layout/MainPage.Layout";
import { FoodTypes } from "@/components/widgets/food_type_display";
import { Icon } from "@/components/ui/icon";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <React.Suspense
      fallback={
        <div className="w-full h-full flex justify-center items-center">
          <Icon
            iconName={"spinner"}
            className="animate-spin text-3xl"
            size="big"
          />
        </div>
      }
    >
      <MainPageLayout header={<FoodTypes />}>{children}</MainPageLayout>
    </React.Suspense>
  );
}
