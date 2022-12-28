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
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <div className="max-w-2xl mx-auto flex flex-col justify-center gap-4">
        <h1 className="text-2xl font-normal self-center">Zasady Gry</h1>
        <div className="flex flex-col gap-1">
          {data?.allRules.map((rule) => {
            return (
              <div key={rule.id} className="flex items-center">
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
}
