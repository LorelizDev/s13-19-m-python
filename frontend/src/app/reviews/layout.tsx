import { MainPageLayout } from "@/components/layout/MainPage.Layout";
import { Text } from "@/components/ui/text";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div>
      <MainPageLayout
        header={
          <Text type="title" className="h-20 flex justify-center items-center">
            contános sobre tu experiencia
          </Text>
        }
      >
        {children}
      </MainPageLayout>
    </div>
  );
}
