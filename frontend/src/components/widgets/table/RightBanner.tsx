"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PersonsType, usePersonsState } from "@/state/persons.store";
import React from "react";
import content from "./content.json";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  comensales: any;
};
export default function RightBanner({ comensales }: Props) {
  const { persons, addPerson, deletePerson, setPersons } = usePersonsState(
    (state) => state
  );

  const [personNames, setPersonNames] = React.useState<{
    [key: number]: string;
  }>({});

  const handleInputChange = (id: number, value: string) => {
    setPersonNames((prevNames) => ({
      ...prevNames,
      [id]: value,
    }));
  };

  return (
    <div id="parte2" className="w-3/5 h-full bg-[#1E1E1E]">
      <form action="">
        <div className="flex flex-col h-3/5 justify-center items-center gap-5 my-4">
          {persons.map((person: PersonsType) => (
            <div
              key={person.id}
              className="flex justify-center items-center gap-5 "
            >
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-50 rounded-full flex justify-center items-center">
                {person.avatar}
              </div>
              <label htmlFor={`comensal-${person.id}`}></label>
              <input
                id={`comensal-${person.id}`}
                name={`comensal-${person.id}`}
                type="text"
                value={personNames[person.id] || ""}
                onChange={(event) =>
                  handleInputChange(person.id, event.target.value)
                }
                className="w-32 md:w-48 lg:w-96 h-10 bg-gray-50 text-center rounded-lg text-black"
                placeholder="Nombre"
              />
              <Icon
                iconName="trash"
                size="big"
                className="cursor-pointer text-red-300"
                onClick={() => deletePerson(person.id)}
              />
            </div>
          ))}
        </div>
        <div className="h-2/5 text-center text-white py-3">
          <div>
            <h2>Una vez seleccionado.....</h2>
          </div>
          <div className="py-10">
            <div className="flex justify-center items-center gap-5 py-2 ml-6 ">
              <Button
                type="button"
                className="w-48 md:w-96 h-10 bg-gray-50 text-black text-center rounded-lg py-6"
                onClick={() => addPerson()}
              >
                {content.buttons[0].option}
              </Button>
            </div>
            <div className="flex justify-center items-center gap-5 py-2 ml-6 ">
              <Link
                href={"/menu"}
                type="submit"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-48 md:w-96 h-10 bg-gray-50 text-black text-center rounded-lg py-6"
                )}
              >
                {content.buttons[1].option}
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
