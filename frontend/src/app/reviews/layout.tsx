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
            Nuestros clientes opinan.
          </Text>
        }
      >
        {children}
      </MainPageLayout>
    </div>
  );
}
