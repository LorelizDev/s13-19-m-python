import React from "react";

type Props = {
  type: "title" | "subtitle" | "regular" | "small" | "semi-bold"; 
  children: React.ReactNode;
  className?: string;
};

export const Text = ({ type, children, className = "" }: Props) => {
  if (type === "title")
    return (
      <h1
        className={`text-2xl font-bold text-foreground uppercase ${className}`}
      >
        {children}
      </h1>
    );

  if (type === "subtitle")
    return (
      <h2
        className={`text-xl font-bold text-foreground ${className}`}
      >
        {children}
      </h2>
    );

  if (type === "regular")
    return <p className={`text-foreground ${className}`}>{children}</p>;

  if (type === "small")
    return <p className={`text-sm text-foreground font-thin ${className}`}>{children}</p>;

  if (type === "semi-bold")
    return <p className={`text-foreground font-semibold text-lg ${className}`}>{children}</p>;
};
