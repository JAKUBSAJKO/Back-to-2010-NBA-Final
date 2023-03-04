import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { texts } from "../../constants/static-text";
import { removeUserExistToken } from "../../features/userExistSlice";
import { routes } from "../../routes/routes";

export default function Win() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userExist = useAppSelector(
    (state: RootState) => state.userExistToken.value
  );

  const endGame = () => {
    dispatch(removeUserExistToken());
    navigate(routes.root);
  };

  useEffect(() => {
    if (!userExist) {
      navigate(routes.user);
      alert("Musisz podać imię i nazwisko zanim dojdzie do rozgrywki");
    }
  }, []);

  return userExist ? (
    <div className="w-full h-screen bg-win bg-center bg-no-repeat bg-foto-bg flex flex-col justify-center items-center gap-4">
      <h1 className="text-lg font-bold italic text-white 2xl:text-2xl">
        Gratulację!
      </h1>
      <p className="max-w-lg text-sm font-bold text-center italic text-white px-8 md:text-base 2xl:text-2xl 2xl:max-w-2xl">
        {texts.win}
      </p>
      <button
        className="border-2 border-white rounded-md mt-4 text-white text-sm px-4 py-2 transition-all hover:bg-white hover:text-black 2xl:scale-125"
        onClick={endGame}
      >
        Koniec
      </button>
    </div>
  ) : null;
}
