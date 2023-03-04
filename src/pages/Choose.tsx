import { Link } from "react-router-dom";
import useSound from "use-sound";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { setQuestionDifficulty } from "../features/chooseDifficultySlice";
import { routes } from "../routes/routes";
import BounceBall from "../assets/sounds/basketball-bounce.mp3";

export default function Choose() {
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

  const [bounceSound] = useSound(BounceBall);

  return userExist ? (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-12 sm:gap-8 2xl:gap-12">
      <div className="flex flex-col gap-8 sm:flex-row 2xl:gap-16">
        <button
          onClick={() => {
            dispatch(setQuestionDifficulty(2));
            bounceSound();
          }}
          className={`border-4 border-lakers-purple px-8 py-2 2xl:scale-125 ${
            questionDifficulty === 2
              ? "bg-lakers-purple text-lakers-yellow"
              : ""
          }`}
        >
          2 punkty
        </button>
        <button
          onClick={() => {
            dispatch(setQuestionDifficulty(3));
            bounceSound();
          }}
          className={`border-4 border-lakers-purple px-8 py-2 2xl:scale-125 ${
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
        <p onClick={() => bounceSound()}>Wybierz</p>
      </Link>
    </div>
  ) : null;
}
