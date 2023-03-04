import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { setQuestionDifficulty } from "../../features/chooseDifficultySlice";
import {
  clearCurrentQuestion,
  incrementCurrentQuestion,
} from "../../features/currentQuestionSlice";
import { incrementLakersPoints } from "../../features/lakersPoints";
import { incrementUserPoints } from "../../features/userPointsSlice";
import { IResponse } from "../../hooks/useQuestion";
import { routes } from "../../routes/routes";
import Swish from "../../assets/sounds/basketball-swish.mp3";
import MissingShotHit from "../../assets/sounds/basketball-missing-shot-hit.mp3";
import BounceBall from "../../assets/sounds/basketball-bounce.mp3";
import BuzzerBeater from "../../assets/sounds/basketball-buzzer-beater.mp3";

interface Props {
  data: IResponse | undefined;
  isAfterPick: boolean;
  setIsAfterPick: Dispatch<SetStateAction<boolean>>;
  setIsCorrectAnswer: Dispatch<SetStateAction<boolean>>;
}

export function GameBoard({
  data,
  isAfterPick,
  setIsAfterPick,
  setIsCorrectAnswer,
}: Props) {
  const [userChoice, setUserChoice] = useState("");

  const [swishSound] = useSound(Swish);
  const [missingShotHitSound] = useSound(MissingShotHit);
  const [bounceSound] = useSound(BounceBall);
  const [buzzerBeaterSound] = useSound(BuzzerBeater);

  const navigate = useNavigate();

  const chooseDifficulty = useAppSelector(
    (state: RootState) => state.chooseDifficulty.value
  );
  const currentQuestion = useAppSelector(
    (state: RootState) => state.currentQuestion.value
  );

  const dispatch = useAppDispatch();

  const checkAnswer = () => {
    setIsAfterPick((prev) => !prev);
    if (userChoice === data?.allQuestions[0].correctanswer) {
      setIsCorrectAnswer((prev) => !prev);
      swishSound();
      if (chooseDifficulty === 2) {
        dispatch(incrementUserPoints(chooseDifficulty));
        dispatch(incrementLakersPoints(chooseDifficulty));
      } else {
        dispatch(incrementUserPoints(chooseDifficulty));
        dispatch(incrementLakersPoints(chooseDifficulty));
      }
    } else {
      missingShotHitSound();
    }
  };

  const nextQuestionOrLastQuestion = () => {
    dispatch(setQuestionDifficulty(0));
    if (currentQuestion === 10) {
      clearCurrentQuestion();
      buzzerBeaterSound();
      navigate(routes.finish);
    } else {
      dispatch(incrementCurrentQuestion());
      navigate(routes.choose);
    }
  };

  return (
    <div
      className={`w-full min-h-[calc(100vh-76px)] flex flex-col justify-center items-center lg:flex-row lg:md:min-h-[calc(100vh-144px)] 2xl:min-h-[calc(100vh-216px)] xl:gap-4 2xl:gap-8 ${
        window.innerHeight < 768 ? "sm:my-8 lg:my-0" : ""
      }`}
    >
      <div
        className={`${
          data?.allQuestions[0].image !== null
            ? "mt-8 border-2 p-4 sm:mt-0 sm:mb-8 lg:mb-0"
            : ""
        }`}
      >
        {data?.allQuestions[0].image !== null ? (
          <img
            src={data?.allQuestions[0].image.url || ""}
            alt=""
            className="w-40 lg:w-52 2xl:w-64"
          />
        ) : (
          ""
        )}
      </div>
      <div className="my-8 flex flex-col justify-center items-center gap-4 sm:w-[512px] sm:my-0 2xl:w-[768px] 2xl:gap-8">
        <h1 className="2xl:text-2xl">{data?.allQuestions[0].title}</h1>
        <p className="text-center px-4 sm:px-0 2xl:text-2xl">
          {data?.allQuestions[0].question}
        </p>
        <div className="my-4 flex flex-col gap-4 lg:my-0 sm:grid sm:grid-cols-2 sm:gap-4 2xl:gap-y-8 2xl:gap-x-20">
          {data?.allQuestions[0].answers.map((answer: string) => {
            return (
              <button
                key={answer}
                onClick={() => {
                  setUserChoice(answer);
                  bounceSound();
                }}
                className={`w-48 py-2 border-2 border-lakers-purple 2xl:scale-125 2xl:text-xl 2xl:w-56 ${
                  userChoice === answer
                    ? "bg-lakers-purple text-lakers-yellow"
                    : ""
                }`}
                disabled={isAfterPick ? true : false}
              >
                {answer}
              </button>
            );
          })}
        </div>
        {!isAfterPick ? (
          <button
            className={userChoice === "" ? "invisible" : "visible btn-outline"}
            onClick={checkAnswer}
          >
            Wybierz
          </button>
        ) : currentQuestion === 10 ? (
          <button
            className={userChoice === "" ? "invisible" : "visible btn-outline"}
            onClick={nextQuestionOrLastQuestion}
          >
            Zakończ mecz
          </button>
        ) : (
          <button className="btn-outline" onClick={nextQuestionOrLastQuestion}>
            Następne pytanie
          </button>
        )}
      </div>
      <div
        className={`${
          data?.allQuestions[0].image !== null
            ? "hidden lg:block mt-8 border-2 p-4 sm:mt-0 sm:mb-8 lg:mb-0"
            : ""
        }`}
      >
        {data?.allQuestions[0].image !== null ? (
          <img
            src={data?.allQuestions[0].image.url || ""}
            alt=""
            className="lg:w-52 2xl:w-64"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
