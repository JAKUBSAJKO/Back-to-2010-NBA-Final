import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { setQuestionDifficulty } from "../features/chooseDifficultySlice";

export const Choose = () => {
  const questionDifficulty = useAppSelector(
    (state: RootState) => state.chooseDifficulty.value
  );
  const currentQuestion = useAppSelector(
    (state: RootState) => state.currentQuestion.value
  );
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <div className="flex gap-8">
        <button
          onClick={() => dispatch(setQuestionDifficulty(2))}
          className={`border-4 border-purple-500 px-8 py-2 ${
            questionDifficulty === 2 ? "bg-purple-500 text-yellow-300" : ""
          }`}
        >
          2 punkty
        </button>
        <button
          onClick={() => dispatch(setQuestionDifficulty(3))}
          className={`border-4 border-purple-500 px-8 py-2 ${
            questionDifficulty === 3 ? "bg-purple-500 text-yellow-300" : ""
          }`}
        >
          3 punkty
        </button>
      </div>
      <Link to={`/question/${currentQuestion}`} className="btn-outline">
        Wybierz
      </Link>
    </div>
  );
};
