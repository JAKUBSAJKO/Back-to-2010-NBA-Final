import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      if (chooseDifficulty === 2) {
        dispatch(incrementUserPoints(chooseDifficulty));
        dispatch(incrementLakersPoints(chooseDifficulty));
      } else {
        dispatch(incrementUserPoints(chooseDifficulty));
        dispatch(incrementLakersPoints(chooseDifficulty));
      }
    }
  };

  const nextQuestionOrLastQuestion = () => {
    dispatch(setQuestionDifficulty(0));
    if (currentQuestion === 10) {
      clearCurrentQuestion();
      navigate(routes.finish);
    } else {
      dispatch(incrementCurrentQuestion());
      navigate(routes.choose);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-160px)] flex justify-center items-center">
      <div className="border-2">
        {data?.allQuestions[0].image !== null ? (
          <img src={data?.allQuestions[0].image.url || ""} alt="" />
        ) : (
          ""
        )}
      </div>
      <div className="w-[512px] flex flex-col justify-center items-center gap-4">
        <h1>{data?.allQuestions[0].title}</h1>
        <p className="text-center">{data?.allQuestions[0].question}</p>
        <div className="grid grid-cols-2 gap-4">
          {data?.allQuestions[0].answers.map((answer: string) => {
            return (
              <button
                key={answer}
                onClick={() => setUserChoice(answer)}
                className={`w-48 py-2 border-2 border-lakers-purple ${
                  userChoice === answer
                    ? "bg-lakers-purple text-lakers-yellow"
                    : ""
                }`}
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
      <div className="border-2">
        {data?.allQuestions[0].image !== null ? (
          <img src={data?.allQuestions[0].image.url || ""} alt="" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
