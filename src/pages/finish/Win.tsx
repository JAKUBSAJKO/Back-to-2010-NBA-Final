import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
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

  return (
    <div className="w-full h-screen bg-win bg-center flex flex-col justify-center items-center">
      {userExist ? (
        <>
          <h1 className="text-lg font-bold italic text-white">Gratulację!</h1>
          <p className="max-w-lg font-bold text-center italic text-white">
            Udało ci się odratować historię. Mam nadzieję, że dobrze się
            bawiłaś/eś rozwiązując quiz.
          </p>
          <button
            className="border-2 border-white rounded-md mt-4 text-white text-sm px-4 py-2 transition-all hover:bg-white hover:text-black"
            onClick={endGame}
          >
            Koniec
          </button>
        </>
      ) : null}
    </div>
  );
}
