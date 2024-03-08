import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import WelcomeMenu from "@/components/widgets/welcome_menu/WelcomeMenu";

type Props = {};
export default function page({}: Props) {
  return (
    <ScrollArea className="w-screen h-screen flex ">
      <WelcomeMenu />
    </ScrollArea>
  );
}
