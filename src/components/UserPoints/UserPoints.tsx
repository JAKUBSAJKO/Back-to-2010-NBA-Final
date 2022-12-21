import { useState } from "react";

export const UserPoints = () => {
  const [userPoints, setUserPoints] = useState(0);
  return (
    <div className="border-2 border-black rounded-md p-4 flex flex-col justify-center items-center">
      <p className="text-xs">Zdobyte punkty</p>
      <p className="font-semibold">{userPoints}</p>
    </div>
  );
};
