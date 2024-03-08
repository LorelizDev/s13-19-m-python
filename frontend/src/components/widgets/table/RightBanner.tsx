"use client";

import React, { useState } from "react";
import content from "./content.json";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { PersonsType, usePersonsState } from "@/state/persons.store";
import { AvatarTable } from "./Avatar";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  comensales: any;
};

export default function RightBanner({ comensales }: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const { persons, addPerson, deletePerson, setPersons } = usePersonsState(
    (state) => state
  );

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (id: number, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleForm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const updatedPersons: PersonsType[] = persons.map((person) => ({
      ...person,
      name: formValues[person.id.toString()] || person.name,
    }));

    setFormValues({}); // Limpiar los valores del formulario
    setPersons(updatedPersons);

    if (updatedPersons.some((person) => person.name !== "")) {
      router.push("/menu");
    } else {
      toast({
        title: "No se ha registrado ningún comensal.",
        description:
          "Al menos un comensal debe estar registrado para ir al menú.",
      });
    }
  };

  function handleAddPerson() {
    if (persons.length <= 7) {
      addPerson();
    } else {
      toast({
        title: "Haz alcanzado el limite de comensales",
        description:
          "Recuerda que más de una persona pueden pedir bajo un mismo nombre y avatar.",
      });
    }
  }

  return (
    <div
      id="parte2"
      className="w-[70%] h-full bg-[#1E1E1E] px-10 flex flex-col justify-center"
    >
      <form action="" className="flex flex-col justify-center items-center">
        <div className="flex flex-col h-96 w-4/5 max-h-2/5 flex-wrap overflow-hidden justify-center items-center gap-5 my-4">
          {persons.map((person: PersonsType) => (
            <div
              key={person.id}
              className="flex justify-center items-center gap-5"
            >
              <AvatarTable person={person} />
              <label htmlFor={`comensal-${person.id}`}></label>
              <input
                id={`comensal-${person.id}`}
                name={`comensal-${person.id}`}
                type="text"
                className="w-32 md:w-[12rem] h-10 bg-gray-50 text-center rounded-lg text-black font-bold placeholder:text-black"
                placeholder={person.name ? person.name : "_"}
                value={formValues[person.id.toString()] || ""}
                onChange={(e) => handleInputChange(person.id, e.target.value)}
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
            <div className="flex justify-center items-center gap-5 py-2 ml-6">
              <Button
                type="button"
                className="w-48 md:w-96 bg-gray-50 text-center rounded-lg py-6 text-black font-bold"
                onClick={handleAddPerson}
              >
                {content.buttons[0].option}
              </Button>
            </div>
            <div className="flex justify-center items-center gap-5 py-2 ml-6">
              <Button
                type="submit"
                className="w-full bg-gray-50 rounded-lg py-6 text-black font-bold"
                onClick={(event) => handleForm(event)}
              >
                {content.buttons[1].option}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
