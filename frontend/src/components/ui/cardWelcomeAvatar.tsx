import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type UserData = {
  // Define las propiedades de userData según tu estructura de datos
  name: string;
  // Otras propiedades...
};

export const CardWelcomeAvatar = ({ userData }: { userData: UserData }) => (
  <ul className="h-[2rem] w-[80vw] mt-[4.8rem] lg:max-w-[30rem]">
    <li className="bg-gray-500 pl-6 py-3 rounded-2xl">
      <Avatar className="size-20 ml-[1rem] mt-[-3.2rem] absolute">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex justify-between ml-[8rem] w-container ">
        <p className="text-2xl ">{userData.name}</p>
        <span>EditIcon</span>
      </div>
    </li>
  </ul>
);
