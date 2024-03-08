import React from "react";
import { Review } from "@/components/widgets/review";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

type Props = {};

export default function page({}: Props) {
  return (
    <ScrollArea>
      <Review />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
