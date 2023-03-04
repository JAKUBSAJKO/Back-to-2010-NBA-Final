import { Link } from "react-router-dom";

import { routes } from "../../routes/routes";
import { texts } from "../../constants/static-text";

export default function Start() {
  return (
    <div className="w-full h-screen p-8 flex flex-col justify-center items-center gap-6 2xl:gap-8">
      <p className="max-w-xl 2xl:max-w-3xl 2xl:text-xl">{texts.beforeStart}</p>
      <p className="2xl:text-xl">Jesteś gotowy(-wa)?</p>
      <Link to={routes.choose} className="btn-outline mt-4">
        Rozpocznij mecz
      </Link>
    </div>
  );
}
