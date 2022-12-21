import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const UserForm = () => {
  const username = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(username.current?.value);
    navigate("/introduce/roles");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl flex flex-col justify-center items-center gap-4"
    >
      <input
        ref={username}
        type="text"
        name="username"
        placeholder="Podaj imię"
        className="w-64 px-4 py-2 border-2 border-purple-500 rounded-md text-sm"
        required
      />
      <button type="submit" className="btn-outline">
        Dalej
      </button>
    </form>
  );
};
