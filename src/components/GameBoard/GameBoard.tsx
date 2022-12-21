import { useState } from "react";
import { IQuestion } from "../../pages/Question";

interface Props {
  question: IQuestion | undefined;
}

export default function GameBoard({ question }: Props) {
  const [userChoice, setUserChoice] = useState("");

  return (
    <div className="w-full h-[calc(100vh-160px)] flex justify-center items-center">
      <div className="bg-blue-500">{question?.foto}</div>
      <div className="w-[512px] bg-green-500 flex flex-col justify-center items-center gap-4">
        <h1>{question?.title}</h1>
        <p className="text-center">{question?.question.text}</p>
        <div className="grid grid-cols-2 gap-4">
          {question?.question.answers.map((answer: string) => {
            return (
              <button
                key={answer}
                onClick={() => setUserChoice(answer)}
                className={`w-48 py-2 border-2 border-purple-500 ${
                  userChoice === answer ? "bg-purple-500 text-yellow-300" : ""
                }`}
              >
                {answer}
              </button>
            );
          })}
        </div>
        <button className="btn-outline">Wybierz</button>
      </div>
      <div className="bg-yellow-500">{question?.foto}</div>
    </div>
  );
}
