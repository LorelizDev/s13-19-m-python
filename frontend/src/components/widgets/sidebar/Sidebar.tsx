import Link from "next/link";
import React from "react";

import content from "./content.json";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

type Props = {};

export function Sidebar({}: Props) {
  return (
    <div id="menu">
      <div>
        <div className="h-screen flex flex-col justify-evenly items-center bg-background ">
          {content.options.map((menus) => (
            <Link
              key={menus.id}
              href={menus.url}
              className="text-foreground flex flex-col items-center w-full rounded-l-xl  focus:bg-accent  py-5 "
            >
              <Icon iconName={menus.icon} size="lg" />
              <Text type="small" className="text-xs">
                {menus.name}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
