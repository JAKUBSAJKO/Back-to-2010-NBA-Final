import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { CommentsBoard } from "../components/CommentsBoard/CommentsBoard";
import { GameBoard } from "../components/GameBoard/GameBoard";
import { ScoreBoard } from "../components/ScoreBoard/ScoreBoard";
import { Spinner } from "../components/Spinner/Spinner";
import { useQuestion } from "../hooks/useQuestion";
import { routes } from "../routes/routes";

export default function Question() {
  const navigate = useNavigate();
  const [isAfterPick, setIsAfterPick] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const { slug } = useParams();

  const { data, loading, error } = useQuestion(slug || "");

  const userExist = useAppSelector(
    (state: RootState) => state.userExistToken.value
  );

  const currentQuestion = useAppSelector(
    (state: RootState) => state.currentQuestion.value
  );

  useEffect(() => {
    if (!userExist) {
      navigate(routes.user);
      alert("Musisz podać imię i nazwisko zanim dojdzie do rozgrywki");
    } else if (currentQuestion === 10) {
      if (slug?.slice(-2) !== currentQuestion.toString()) {
        navigate(routes.choose);
        alert("Nie możesz ręcznie wpisywać ścieżki do pytania!");
      }
    } else if (slug?.slice(-1) !== currentQuestion.toString()) {
      navigate(routes.choose);
      alert("Nie możesz ręcznie wpisywać ścieżki do pytania!");
    }
  }, []);

  if (currentQuestion === 10) {
    if (slug?.slice(-2) !== currentQuestion.toString()) {
      navigate(routes.choose);
      alert("Nie możesz ręcznie wpisywać ścieżki do pytania!");
    }
  } else if (loading) return <Spinner />;
  if (error) return <div>Error...</div>;

  return (
    <>
      {userExist ? (
        <div className="w-full h-screen flex flex-col justify-between bg-gray-100">
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
      ) : null}
    </>
  );
}
