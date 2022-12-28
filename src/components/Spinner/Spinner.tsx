import { IoBasketballOutline } from "react-icons/io5";

export function Spinner() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <IoBasketballOutline className="text-5xl animate-bounce text-orange-500" />
      <div className="w-6 border-2 m-0 border-gray-300"></div>
    </div>
  );
}
