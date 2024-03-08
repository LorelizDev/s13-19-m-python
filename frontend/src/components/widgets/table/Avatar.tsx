"use client";

import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { PersonsType, usePersonsState } from "@/state/persons.store";

type AvatarTableProps = {
  person: PersonsType;
};

const colors: PersonsType["avatar"][] = [
  "bg-red-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-fuchsia-500",
  "bg-pink-500",
  "bg-gray-500",
  "bg-cyan-500",
];
export const AvatarTable = ({ person }: AvatarTableProps) => {
  const { updatePersonsAvatar } = usePersonsState((state) => state);

  return (
    <Drawer>
      <DrawerTrigger
        className={cn(
          `w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] ${person.avatar} rounded-full flex justify-center items-center`
        )}
      >
       
      </DrawerTrigger>
      <DrawerContent className="bg-red-50">
        <DrawerHeader>
          <DrawerTitle className="text-black">
            Selecciona el color de tu avatar
          </DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="flex justify-evenly">
          {colors.map((color: PersonsType["avatar"], i) => {
            return (
              <div
                key={i}
                className={cn(
                  `size-20 rounded-full hover:scale-105 cursor-pointer ${color} `
                )}
                onClick={() => updatePersonsAvatar(person.id, color)}
              ></div>
            );
          })}
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="destructive">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
