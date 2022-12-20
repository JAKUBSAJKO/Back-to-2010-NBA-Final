import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <p className="max-w-xl">
        Bez twoich punktów mamy 79 - 62 dla Boston Celtics. Od Ciebie zależy czy
        Los Angeles zdobędzie swój 16 tytuł mistrzowski. Nie zawiedź trenera,
        kolegów z zespołu oraz swoich fanów.
      </p>
      <p>Jesteś gotowy(-wa)?</p>
      <Link to="" className="btn-outline mt-4">
        Rozpocznij mecz
      </Link>
    </div>
  );
};
