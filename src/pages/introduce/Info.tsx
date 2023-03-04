import { Link } from "react-router-dom";

import { texts } from "../../constants/static-text";
import { routes } from "../../routes/routes";

export default function Info() {
  return (
    <div className="w-full min-h-screen p-8 flex flex-col justify-center items-center gap-8 md:gap-4 2xl:gap-8">
      <p className="text-base md:max-w-3xl md:border-2 md:border-lakers-purple md:rounded-md md:p-8 2xl:max-w-5xl 2xl:text-xl">
        {texts.startInformation}
      </p>
      <Link to={routes.user} className="btn-outline">
        Dalej
      </Link>
    </div>
  );
}
