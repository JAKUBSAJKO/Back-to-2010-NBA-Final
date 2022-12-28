import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { removeUserExistToken } from "../../features/userExistSlice";
import { routes } from "../../routes/routes";

export default function Failure() {
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
    <div className="w-full h-screen bg-failure bg-top flex flex-col justify-center items-center">
      {userExist ? (
        <>
          <h1 className="text-lg font-bold italic text-white">Niestety!</h1>
          <p className="max-w-lg font-bold text-center italic text-white">
            Nie udało ci się odratować historii. Ale to nic straconego! Spróbuj
            ponownie!
          </p>
          <button
            className="border-2 border-white rounded-md mt-4 text-white text-sm px-4 py-2 transition-all hover:bg-white hover:text-black"
            onClick={endGame}
          >
            Spróbuj ponownie
          </button>
        </>
      ) : null}
    </div>
  );
}
