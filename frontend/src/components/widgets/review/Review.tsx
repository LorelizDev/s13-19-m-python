import React from "react";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

type Props = {};

function LeftPanel() {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-96 h-80 bg-card rounded-xl flex justify-center items-center">
        aquí va la imagen
      </div>
      <Text type="regular">Agregar un titulo</Text>
      <div className="flex ">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} iconName="star" size="big" />
        ))}
      </div>
    </div>
  );
}

const badgeNames = [
  "Atención",
  "Ambiente",
  "Precio",
  "Música",
  "Calidad de la comida",
  "Variedad del menú",
  "Ubicación",
];

function RightPanel() {
  return (
    <div className="flex flex-col gap-5">
      <Text type="regular">
        {" "}
        Seleccione aquellos aspectos de su experiencia en el restaurante que más
        le gustaron
      </Text>
      <div className="w-52 max-h-36 flex flex-col flex-wrap gap-x-5 gap-y-2">
        {badgeNames.map((badgeName, i) => (
          <Badge key={i} className="h-7">{badgeName}</Badge>
        ))}
      </div>
      <Textarea placeholder="Type your message here." rows={7} className="bg-card placeholder:text-black" />
      <Button className="w-24 self-end">Guardar</Button>
    </div>
  );
}

export function Review({}: Props) {
  return (
    <div className="w-full h-full flex px-5 mt-10">
      <div className="w-1/2 h-full">
        <LeftPanel />
      </div>
      <div className="w-1/2 h-full">
        <RightPanel />
      </div>
    </div>
  );
}
