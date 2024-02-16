import React from "react";

type StackProps = {
  children: React.ReactNode;
  distribution: "horizontal" | "vertical";
  showOutline?: boolean;
  className?: string;
};

const baseStyle = "w-full h-full flex overflow-hidden";

const outlines = "outline-4 outline-dashed outline-gray-400";

const distributions = {
  horizontal: "flex-row justify-evenly items-center bg-background text-foreground",
  vertical: "flex-col justify-evenly items-center bg-background text-foreground",
};

export const Stack = ({children, distribution, showOutline, className }: StackProps) => {
  return (
    <div className={`${showOutline ? outlines : ''} ${baseStyle} ${distributions[distribution]} ${className}`}>
      {children}
    </div>
  );
};
