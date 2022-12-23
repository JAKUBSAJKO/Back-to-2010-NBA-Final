import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

export default function Finish() {
  const userPoints = useAppSelector(
    (state: RootState) => state.userPoints.value
  );
  const lakersPoints = useAppSelector(
    (state: RootState) => state.lakersPoints.value
  );
  const user = useAppSelector((state: RootState) => state.user.value);

  const win = `TAAAAAAAAAAAAK! Mecz kończy się wynikiem ${lakersPoints} - 79 dla Lakers. Los Angeles Lakers wygrywają swój 16 tytuł mistrzowski. Wspaniale jak zawsze zagrał Koby Bryant, który zdobył 24 punkty. Wspaniale również zagrał dziś rezerwowy(-wa) drużyzy Lakers ${user.first} ${user.last}, który(-a) godnie zastąpił(-a) kontuzjowanego Metta World Peac'a zrzutając drużynie z Bostonu ${userPoints} punktów.`;

  const draw = `Niestety! Los Angeles Lakers przegrywają finał z Boston Celtics ${lakersPoints} - 81. W ostatniej akcji meczu zawodnik(-a) ${user.first} ${user.last} faulował Rajona Rondo przy rzucie, a ten następnie zamienił 2 rzuty wolne na punkty. Wspaniale jak zawsze zagrał Koby Bryant, który zdobył 24 punkty, ale to nie wystarczyło, aby pokonać drużynę z Bostonu. Może brakowało dziś Metta World Peace'a, który doznał kontuzji na rozgrzewce. ${user.first} ${user.last} miał(-a) wiele okazji w tym meczu, aby godnie zastąpić Metta World Peace'a, lecz niestety zdobył(-a) tylko ${userPoints} punktów.`;

  const failure = `Niestety! Los Angeles Lakers przegrywają finał z Boston Celtics ${lakersPoints} - 79. Wspaniale jak zawsze zagrał Koby Bryant, który zdobył 24 punkty, ale to nie wystarczyło, aby pokonać drużynę z Bostonu. Może brakowało dziś Metta World Peace'a, który doznał kontuzji na rozgrzewce. ${user.first} ${user.last} miał(-a) wiele okazji w tym meczu, aby godnie zastąpić Metta World Peace'a, lecz niestety zdobył(-a) tylko ${userPoints} punktów.`;

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <p className="max-w-xl border-2 border-purple-500 rounded-md p-8">
        {userPoints > 18 ? win : userPoints === 18 ? draw : failure}
      </p>
      <Link
        to={userPoints > 18 ? `/finish/win` : `/finish/failure`}
        className="btn-outline"
      >
        Dalej
      </Link>
    </div>
  );
}
