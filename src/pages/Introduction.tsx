import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import { routes } from "../routes/routes";

export default function Introduction() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl px-12 text-center uppercase font-bold italic md:text-4xl">
        Back to 2010 NBA Finals
      </h1>
      <img src={Logo} alt="" width={296} className="w-56 md:w-72" />
      <Link to={routes.info} className="btn-outline">
        Start
      </Link>
    </div>
  );
}
