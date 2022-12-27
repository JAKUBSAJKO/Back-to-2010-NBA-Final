import { Link } from "react-router-dom";

import { routes } from "../../routes/routes";

export default function Start() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <p className="max-w-xl">
        Bez punktów Metta World Peace'a mamy 79 - 63 dla Boston Celtics. Od
        Ciebie zależy czy Los Angeles zdobędzie swój 16 tytuł mistrzowski. Nie
        zawiedź trenera, kolegów z zespołu oraz swoich fanów.
      </p>
      <p>Jesteś gotowy(-wa)?</p>
      <Link to={routes.choose} className="btn-outline mt-4">
        Rozpocznij mecz
      </Link>
    </div>
  );
}
