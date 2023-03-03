import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

export const UserPoints = () => {
  const userPoints = useAppSelector(
    (state: RootState) => state.userPoints.value
  );
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-xs text-center 2xl:text-lg">Zdobyte punkty</p>
      <p className="font-semibold 2xl:text-xl">{userPoints}</p>
    </div>
  );
};
