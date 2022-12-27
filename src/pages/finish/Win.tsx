import { useNavigate } from "react-router-dom";

import { routes } from "../../routes/routes";

export default function Win() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-win bg-center flex flex-col justify-center items-center">
      <h1 className="text-lg font-bold italic text-white">Gratulację!</h1>
      <p className="max-w-lg font-bold text-center italic text-white">
        Udało ci się odratować historię. Mam nadzieję, że dobrze się bawiłaś/eś
        rozwiązując quiz.
      </p>
      <button
        className="border-2 border-white rounded-md mt-4 text-white text-sm px-4 py-2 transition-all hover:bg-white hover:text-black"
        onClick={() => navigate(routes.root)}
      >
        Koniec
      </button>
    </div>
  );
}
