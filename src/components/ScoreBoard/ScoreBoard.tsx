import { useState } from "react";

const BOSTON_POINTS = 79;

export const ScoreBoard = () => {
  const [lakersPoints, setLakersPoints] = useState(62);
  return (
    <div className="w-full h-16 flex">
      <div className="basis-1/2 bg-green-500 flex justify-end items-center">
        <p>Celtic Boston</p>
        <p className="px-8 text-4xl">{BOSTON_POINTS}</p>
      </div>
      <div className="basis-1/2 bg-purple-500 flex items-center">
        <p className="px-8 text-4xl">{lakersPoints}</p>
        <p>Los Angeles Lakers</p>
      </div>
    </div>
  );
};
