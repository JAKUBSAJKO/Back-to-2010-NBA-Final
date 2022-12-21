import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

export const UserPoints = () => {
  const userPoints = useAppSelector(
    (state: RootState) => state.userPoints.value
  );
  return (
    <div className="border-2 border-black rounded-md p-4 flex flex-col justify-center items-center">
      <p className="text-xs">Zdobyte punkty</p>
      <p className="font-semibold">{userPoints}</p>
    </div>
  );
};
