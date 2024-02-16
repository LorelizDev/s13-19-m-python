import React from "react";
import { CardWelcomeAvatar } from "@/components/ui/cardWelcomeAvatar";
import usersData from "./content.json";

export const CardWelcome = () => {
  console.log(usersData);
  return (
    <div>
      {usersData.users.map((userData, i) => {
        return <CardWelcomeAvatar key={i} userData={userData} />;
      })}
    </div>
  );
};
