import { FiHome, FiBell, FiDollarSign, FiMessageCircle, FiUsers } from "react-icons/fi";
import { MdRestaurantMenu, MdOutlineCreditCard, MdStar    } from "react-icons/md";

interface IconTypeMap {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const icons: IconTypeMap = {
  home: FiHome,
  restaurantMenu: MdRestaurantMenu,
  bell: FiBell,
  bill: FiDollarSign,
  message: FiMessageCircle,
  users: FiUsers,
  creditCard: MdOutlineCreditCard, 
  star: MdStar 
};

export type IconTypesType = keyof typeof icons;

export default icons;