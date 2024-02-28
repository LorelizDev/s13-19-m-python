import React from "react";
import { Review } from "@/components/widgets/review";

type Props = {};

export default function page({}: Props) {
  return <div className="w-full h-full overflow-hidden"><Review /></div>;
}
