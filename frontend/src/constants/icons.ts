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
  MdKeyboardBackspace,
} from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import { GiKnifeFork } from "react-icons/gi";

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
  spinner: ImSpinner9,
  back: MdKeyboardBackspace,
  fork: GiKnifeFork,
};

export type IconTypesType = keyof typeof icons;

export default icons;
