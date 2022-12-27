import { useNavigate } from "react-router-dom";

import { routes } from "../../routes/routes";

export default function Failure() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-failure bg-top flex flex-col justify-center items-center">
      <h1 className="text-lg font-bold italic text-white">Niestety!</h1>
      <p className="max-w-lg font-bold text-center italic text-white">
        Nie udało ci się odratować historii. Ale to nic straconego! Spróbuj
        ponownie!
      </p>
      <button
        className="border-2 border-white rounded-md mt-4 text-white text-sm px-4 py-2 transition-all hover:bg-white hover:text-black"
        onClick={() => navigate(routes.root)}
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
