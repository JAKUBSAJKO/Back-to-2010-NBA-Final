import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { GiOldMicrophone } from "react-icons/gi";
import { Link } from "react-router-dom";

import { routes } from "../../routes/routes";
import { useRole } from "../../hooks/useRole";
import { Spinner } from "../../components/Spinner/Spinner";

export default function Roles() {
  const { data, loading, error } = useRole();

  if (loading) return <Spinner />;
  if (error) return <div>Error...</div>;

  return (
    <div className="w-full min-h-screen p-4 flex flex-col justify-center items-center gap-8">
      <div className="max-w-2xl mx-auto flex flex-col justify-center gap-4 2xl:gap-8">
        <h1 className="text-2xl font-normal self-center 2xl:text-3xl">
          Zasady Gry
        </h1>
        <div className="flex flex-col gap-1">
          {data?.allRules.map((rule) => {
            return (
              <ul
                key={rule.id}
                className="flex items-center list-disc px-4 sm:max-w-md md:list-none md:max-w-2xl lg:w-auto lg:px-0 lg:gap-2"
              >
                <BsFillArrowRightSquareFill className="hidden md:block md:text-purple-700 md:mr-2 md:text-xl" />
                <li className="text-sm lg:text-base 2xl:text-lg">
                  {rule.text}
                </li>
              </ul>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:items-center lg:self-start">
          <GiOldMicrophone className="text-xl 2xl:text-lg" />
          <p> = Komentator</p>
        </div>
      </div>
      <Link to={routes.start} className="btn-outline">
        Dalej
      </Link>
    </div>
  );
}
