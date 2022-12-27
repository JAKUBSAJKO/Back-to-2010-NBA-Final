import { Link } from "react-router-dom";

import { routes } from "../../routes/routes";

export default function Info() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <p className="max-w-xl border-2 border-purple-500 rounded-md p-8">
        Cofnijmy się do roku 2010. 17. dzień czerwca, godzina 21:00, jesteśmy w
        hali Staples Center, Los Angeles, Kalifornia. Finał pomiędzy Los Angeles
        Lakers a Boston Celtics największymi drużynami tej ligi w całej
        historii. Stan finału 3-3, więc zaraz odbędzie się decytujące starcie o
        puchar Larry'ego O'Briena. Jesteś rezerwowym drużyny z Los Angeles. Na
        rozgrzewce twój kolega z zespółu Metta World Peace doznaje kontuzji. Do
        pierwszej piątki trener wybiera Ciebie. Twoim zadaniem jest wejść w buty
        Metta World Peace, który zdobył wtedy 20 punktów.
      </p>
      <Link to={routes.user} className="btn-outline">
        Dalej
      </Link>
    </div>
  );
}
