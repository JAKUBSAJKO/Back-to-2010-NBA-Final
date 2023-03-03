import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { RootState } from "../app/store";
import { clearCurrentQuestion } from "../features/currentQuestionSlice";
import { clearLakersPoints } from "../features/lakersPoints";
import { clearUserPoints } from "../features/userPointsSlice";
import { removeUser } from "../features/userSlice";
import { routes } from "../routes/routes";

export default function Finish() {
  const navigate = useNavigate();
  const userPoints = useAppSelector(
    (state: RootState) => state.userPoints.value
  );
  const lakersPoints = useAppSelector(
    (state: RootState) => state.lakersPoints.value
  );
  const userExist = useAppSelector(
    (state: RootState) => state.userExistToken.value
  );

  const user = useAppSelector((state: RootState) => state.user.value);

  const win = `TAAAAAAAAAAAAK! Mecz kończy się wynikiem ${lakersPoints} - 79 dla Lakers. Los Angeles Lakers wygrywają swój 16 tytuł mistrzowski. Wspaniale jak zawsze zagrał Koby Bryant, który zdobył 24 punkty. Wspaniale również zagrał dziś rezerwowy(-wa) drużyny Lakers ${user.first} ${user.last}, który(-a) godnie zastąpił(-a) kontuzjowanego Metta World Peac'a zrzutając drużynie z Bostonu ${userPoints} punktów.`;

  const draw = `Niestety! Los Angeles Lakers przegrywają finał z Boston Celtics ${lakersPoints} - 81. W ostatniej akcji meczu zawodnik(-a) ${user.first} ${user.last} faulował Rajona Rondo przy rzucie, a ten następnie zamienił 2 rzuty wolne na punkty. Wspaniale jak zawsze zagrał Koby Bryant, który zdobył 24 punkty, ale to nie wystarczyło, aby pokonać drużynę z Bostonu. Może brakowało dziś Metta World Peace'a, który doznał kontuzji na rozgrzewce. ${user.first} ${user.last} miał(-a) wiele okazji w tym meczu, aby godnie zastąpić Metta World Peace'a, lecz niestety zdobył(-a) tylko ${userPoints} punktów.`;

  const failure = `Niestety! Los Angeles Lakers przegrywają finał z Boston Celtics ${lakersPoints} - 79. Wspaniale jak zawsze zagrał Koby Bryant, który zdobył 24 punkty, ale to nie wystarczyło, aby pokonać drużynę z Bostonu. Może brakowało dziś Metta World Peace'a, który doznał kontuzji na rozgrzewce. ${user.first} ${user.last} miał(-a) wiele okazji w tym meczu, aby godnie zastąpić Metta World Peace'a, lecz niestety zdobył(-a) tylko ${userPoints} punktów.`;

  const dispatch = useAppDispatch();

  const clearStates = () => {
    dispatch(clearCurrentQuestion());
    dispatch(clearUserPoints());
    dispatch(clearLakersPoints());
    dispatch(removeUser());
  };

  useEffect(() => {
    if (!userExist) {
      navigate(routes.user);
      alert("Musisz podać imię i nazwisko zanim dojdzie do rozgrywki");
    }
  }, []);

  return userExist ? (
    <div className="w-full h-screen p-8 flex flex-col justify-center items-center gap-4 2xl:gap-8">
      <p className="max-w-2xl md:border-2 md:border-lakers-purple md:rounded-md md:p-8 xl:max-w-3xl 2xl:max-w-4xl 2xl:text-xl">
        {userPoints > 17 ? win : userPoints === 16 ? draw : failure}
      </p>
      <Link
        to={userPoints > 17 ? routes.win : routes.failure}
        className="btn-outline"
        onClick={clearStates}
      >
        Dalej
      </Link>
    </div>
  ) : null;
}
