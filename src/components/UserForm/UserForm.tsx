import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addUser } from "../../features/userSlice";

export const UserForm = () => {
  const first = useRef<HTMLInputElement>(null);
  const last = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    console.log(first.current?.value);
    console.log(last.current?.value);
    dispatch(
      addUser({ first: first.current?.value!, last: last.current?.value! })
    );
    navigate("/introduce/roles");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl flex flex-col justify-center items-center gap-4"
    >
      <input
        ref={first}
        type="text"
        name="first"
        placeholder="Podaj imię..."
        className="w-64 px-4 py-2 border-2 border-purple-500 rounded-md text-sm"
        required
      />
      <input
        ref={last}
        type="text"
        name="last"
        placeholder="Podaj nazwisko..."
        className="w-64 px-4 py-2 border-2 border-purple-500 rounded-md text-sm"
        required
      />
      <button type="submit" className="btn-outline mt-1">
        Dalej
      </button>
    </form>
  );
};
