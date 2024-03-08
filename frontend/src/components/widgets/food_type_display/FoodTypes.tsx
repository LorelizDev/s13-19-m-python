"use client";

import React, { useEffect } from "react";
import content from "./content.json";
import Link from "next/link";

import { Text } from "@/components/ui/text";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useFoodState } from "@/state/foodType.store";

export type CategoryKey = "lunch" | "dinner" | "snacks" | "breakfast" | "drink";

export type CategoryMap = {
  [key: string]: string;
};

export const categories: CategoryMap = {
  lunch: "Almuerzo",
  dinner: "Cena",
  snacks: "Merienda",
  breakfast: "Desayuno",
  drink: "Bebida",
};

type Props = {};

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export function FoodTypes({}: Props) {
  const { foodType, setFoodType } = useFoodState((state) => state);
  const params = useSearchParams();
  const category: CategoryKey | null = params.get(
    "category"
  ) as CategoryKey | null;

  useEffect(() => {
    if (category) {
      setFoodType(category);
    }
  }, [category, setFoodType]);

  const renderTitle = (text: string) => (
    <motion.div
      key={text}
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 1.8 }}
      className="h-20"
    >
      <Text type="title" className="p-5">
        {text}
      </Text>
    </motion.div>
  );

  return (
    <div className="bg-accent h-[15dvh] min-h-[15dvh] max-h-[15dvh] fixed w-11/12 flex flex-col">
      {category
        ? renderTitle(categories[foodType])
        : renderTitle("Selecciona un tipo")}

      <ul className="flex flex-wrap">
        {content.seleccion.map((buttons) => (
          <li className="mb-3" key={buttons.name}>
            <Link
              href={buttons.url}
              className="text-sm mx-3 mb-3 w-32 md:w-48 h-10 bg-card text-white text-center rounded-lg py-6 flex items-center justify-center hover:bg-gray-400 transition duration-500 "
            >
              <Text type="semi-bold">{buttons.name}</Text>{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
