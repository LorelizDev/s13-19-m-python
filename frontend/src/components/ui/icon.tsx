import React from "react";
import icons, { IconTypesType } from "@/constants/icons";

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-2xl",
  big: "text-3xl",
  extraBig: "text-5xl",
  huge: "text-9xl",
};

// Types
type IconTypes = {
  iconName: IconTypesType;
  ref?: any;
  className?: string;
  size?: keyof typeof sizes;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
};

// Components
export const Icon: React.FC<IconTypes> = ({
  iconName,
  ref,
  className,
  size,
  onClick,
}) => {
  const name = iconName && iconName;
  const icon = React.createElement(icons[name], {
    className: `${size ? sizes[size] : "text-base"} ${className}`,
    ref: ref,
    onClick: onClick,
  });
  return icon;
};