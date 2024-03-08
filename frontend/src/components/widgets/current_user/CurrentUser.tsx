"use client";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { usePersonsState } from "@/state/persons.store";

type Props = {};

export function CurrentUser({}: Props) {
  const { persons, setSelected } = usePersonsState((state) => state);
  return (
    <div className="absolute top-20 right-5">
      {persons.map((person, index) => (
        <>
          <div
            className={`p-1 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ${
              !person?.selected && "opacity-5"
            } `}
            onClick={() => setSelected(person.id)}
          >
            <Card className={`size-16 rounded-full ${person.avatar} `}>
              <CardContent className="flex aspect-square items-center justify-center p-6"></CardContent>
            </Card>
            <div className="p-2 bg-card rounded-full text-center">
              {person.name}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
