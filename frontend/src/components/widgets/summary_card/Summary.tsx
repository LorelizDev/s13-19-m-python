import React from "react";
import content from "./content.json";

import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { ProductsOrdered } from "./ProductsOrdered";

export const Summary = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between gap-2 p-10">

      <Text type="title" className="text-2xl font-bold text-foreground">
        {content.pageTitle}
      </Text>
      <ProductsOrdered products={content.productsOrdered} />

      <Button
        variant={"secondary"}
        className="w-96 text-md font-bold self-center"
      >
        {content.actionButton}
      </Button>
    </div>
  );
};
