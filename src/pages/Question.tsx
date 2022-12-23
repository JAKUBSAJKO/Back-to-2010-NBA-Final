import { useState } from "react";
import { GiOldMicrophone } from "react-icons/gi";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import GameBoard from "../components/GameBoard/GameBoard";
import { ScoreBoard } from "../components/ScoreBoard/ScoreBoard";
import { UserPoints } from "../components/UserPoints/UserPoints";
import { replaceWordsInComments } from "../helpers/replaceWordsInComments";
import { useQuestion } from "../hooks/useQuestion";

export const Question = () => {
  const [isAfterPick, setIsAfterPick] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const { slug } = useParams();

  const { data, loading, error } = useQuestion(slug || "");

  const user = useAppSelector((state: RootState) => state.user.value);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="w-full h-screen flex flex-col">
      <ScoreBoard />
      <GameBoard
        data={data}
        isAfterPick={isAfterPick}
        setIsAfterPick={setIsAfterPick}
        setIsCorrectAnswer={setIsCorrectAnswer}
      />
      <p>
        {user.first} {user.last}
      </p>
      <div className="w-full h-24 bg-orange-300 flex justify-center items-center gap-4">
        <div className="border-2 border-black rounded-lg px-16 py-6 flex items-center">
          <GiOldMicrophone className="text-2xl mr-2" />
          <p>
            {!isAfterPick
              ? replaceWordsInComments(
                  data?.allQuestions[0].initialcomment || "",
                  user
                )
              : isCorrectAnswer
              ? replaceWordsInComments(
                  data?.allQuestions[0].goodcomment || "",
                  user
                )
              : replaceWordsInComments(
                  data?.allQuestions[0].badcomment || "",
                  user
                )}
          </p>
        </div>
        <UserPoints />
      </div>
    </div>
  );
};
