import { useState } from "react";
import { Link } from "react-router-dom";

export const Choose = () => {
  const [questionLevel, setQuestionLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <div className="flex gap-8">
        <button
          onClick={() => setQuestionLevel(2)}
          className={`border-4 border-purple-500 px-8 py-2 ${
            questionLevel === 2 ? "bg-purple-500 text-yellow-300" : ""
          }`}
        >
          2 punkty
        </button>
        <button
          onClick={() => setQuestionLevel(3)}
          className={`border-4 border-purple-500 px-8 py-2 ${
            questionLevel === 3 ? "bg-purple-500 text-yellow-300" : ""
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
