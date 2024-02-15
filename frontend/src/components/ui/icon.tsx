// 

import React from "react";
import { PiAddressBookBold, PiAirplaneBold  } from "react-icons/pi"
import { FaBars } from "react-icons/fa";

interface IconTypeMap {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const icons: IconTypeMap = {
  airplane: PiAddressBookBold,
  icono2: PiAirplaneBold,
  bars: FaBars,
}

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-2xl",
  big: "text-3xl",
  extraBig:"text-5xl",
  huge: "text-9xl",
};

// Types
type IconTypes = {
  iconName: string;
  className?: string;
  size?: keyof typeof sizes;
};

// Components
export const Icon: React.FC<IconTypes> = ({ iconName, className, size }) => {
  const name = iconName && iconName;
  const icon = React.createElement(icons[name], {
    className: `${size ? sizes[size] : "text-base"} ${className}`,
  });
  return icon;
};