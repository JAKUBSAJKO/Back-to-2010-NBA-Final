import { useState } from "react";
import { useParams } from "react-router-dom";
import { CommentsBoard } from "../components/CommentsBoard/CommentsBoard";

import { GameBoard } from "../components/GameBoard/GameBoard";
import { ScoreBoard } from "../components/ScoreBoard/ScoreBoard";
import { useQuestion } from "../hooks/useQuestion";

export default function Question() {
  const [isAfterPick, setIsAfterPick] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const { slug } = useParams();

  const { data, loading, error } = useQuestion(slug || "");

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
      <CommentsBoard
        data={data}
        isAfterPick={isAfterPick}
        isCorrectAnswer={isCorrectAnswer}
      />
    </div>
  );
}
