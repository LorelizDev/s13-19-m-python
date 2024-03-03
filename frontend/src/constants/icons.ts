import {
  FiHome,
  FiBell,
  FiDollarSign,
  FiMessageCircle,
  FiUsers,
  FiTrash,
  FiShoppingCart,
} from "react-icons/fi";
import {
  MdRestaurantMenu,
  MdOutlineCreditCard,
  MdStar,
  MdOutlineTableRestaurant,
} from "react-icons/md";

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
  star: MdStar,
  table: MdOutlineTableRestaurant,
  trash: FiTrash,
  cart: FiShoppingCart,
};

export type IconTypesType = keyof typeof icons;

export default icons;
