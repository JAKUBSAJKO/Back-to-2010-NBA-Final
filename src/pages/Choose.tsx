import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { setQuestionDifficulty } from "../features/chooseDifficultySlice";
import { routes } from "../routes/routes";

export default function Choose() {
  const navigate = useNavigate();
  const questionDifficulty = useAppSelector(
    (state: RootState) => state.chooseDifficulty.value
  );
  const currentQuestion = useAppSelector(
    (state: RootState) => state.currentQuestion.value
  );
  const userExist = useAppSelector(
    (state: RootState) => state.userExistToken.value
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userExist) {
      navigate(routes.user);
      alert("Musisz podać imię i nazwisko zanim dojdzie do rozgrywki");
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      {userExist ? (
        <>
          <div className="flex gap-8">
            <button
              onClick={() => dispatch(setQuestionDifficulty(2))}
              className={`border-4 border-lakers-purple px-8 py-2 ${
                questionDifficulty === 2
                  ? "bg-lakers-purple text-lakers-yellow"
                  : ""
              }`}
            >
              2 punkty
            </button>
            <button
              onClick={() => dispatch(setQuestionDifficulty(3))}
              className={`border-4 border-lakers-purple px-8 py-2 ${
                questionDifficulty === 3
                  ? "bg-lakers-purple text-lakers-yellow"
                  : ""
              }`}
            >
              3 punkty
            </button>
          </div>
          <Link
            to={
              questionDifficulty === 2
                ? `${routes.easy}${currentQuestion}`
                : `${routes.hard}${currentQuestion}`
            }
            className={
              questionDifficulty !== 0 ? "visible btn-outline" : "invisible"
            }
          >
            Wybierz
          </Link>
        </>
      ) : null}
    </div>
  );
}
