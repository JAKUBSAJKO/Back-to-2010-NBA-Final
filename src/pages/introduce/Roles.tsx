import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { GiOldMicrophone } from "react-icons/gi";
import { Link } from "react-router-dom";

import { routes } from "../../routes/routes";

const rules = [
  { text: "Quiz składa się z 10 pytań." },
  {
    text: "Przed każdym pytaniem decydujesz na jakie pytanie chcesz odpowiedzieć.",
  },
  { text: "Pytanie łatwe = 2 punkty." },
  { text: "Pytanie trudne = 3 punkty." },
  { text: "Zła odpowiedź = nie zdobywasz punktu." },
  { text: "Aby wygrać mecz potrzebujesz zdobyć 18 punktów." },
  { text: "Remis oznacza porażkę, więc musisz zdobyć 18 punktów." },
];

export const Roles = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <div className="max-w-2xl mx-auto flex flex-col justify-center gap-4">
        <h1 className="text-2xl font-normal self-center">Zasady Gry</h1>
        <div className="flex flex-col gap-1">
          {rules.map((rule) => {
            return (
              <div key={rule.text} className="flex items-center">
                <BsFillArrowRightSquareFill className="text-purple-700 text-xl mr-2" />
                <p>{rule.text}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center self-start">
          <GiOldMicrophone className="text-2xl" />
          <p> = Komentator</p>
        </div>
      </div>
      <Link to={routes.start} className="btn-outline">
        Dalej
      </Link>
    </div>
  );
};
