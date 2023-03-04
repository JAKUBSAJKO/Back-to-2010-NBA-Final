import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const BOSTON_POINTS = 79;

export const ScoreBoard = () => {
  const lakersPoints = useAppSelector(
    (state: RootState) => state.lakersPoints.value
  );
  return (
    <div className="w-full h-16 flex 2xl:h-24">
      <div className="basis-1/2 bg-celtics-green flex justify-end items-center text-gold-result font-medium">
        <p className="hidden md:block 2xl:text-2xl">Celtic Boston</p>
        <p className="pr-2 text-xl md:hidden">BOS</p>
        <p className="text-4xl px-4 md:px-8 2xl:text-6xl 2xl:px-12">
          {BOSTON_POINTS}
        </p>
      </div>
      <div className="basis-1/2 bg-lakers-purple flex items-center text-gold-result font-medium">
        <p className="text-4xl px-4 md:px-8 2xl:text-6xl 2xl:px-12">
          {lakersPoints}
        </p>
        <p className="hidden md:block 2xl:text-2xl">Los Angeles Lakers</p>
        <p className="pl-2 text-xl md:hidden">LAL</p>
      </div>
    </div>
  );
};
