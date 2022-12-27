import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch } from "../../app/hooks";
import { addUser } from "../../features/userSlice";
import { User } from "../../features/userSlice";

export const UserForm = () => {
  const schema = yup.object().shape({
    first: yup
      .string()
      .required("Imię jest wymagane!")
      .matches(
        /^[aA-zZ\s]+$/,
        "Imię nie może zawierać cyfr i znaków specjalnych"
      ),
    last: yup
      .string()
      .required("Nazwisko jest wymagane!")
      .matches(
        /^[aA-zZ\s]+$/,
        "Nazwisko nie może zawierać cyfr i znaków specjalnych"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<User> = (data) => {
    dispatch(addUser({ first: data.first, last: data.last }));
    navigate("/introduce/roles");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl flex flex-col justify-center items-center gap-4"
    >
      <input
        type="text"
        placeholder="Podaj imię..."
        className="w-64 px-4 py-2 border-2 border-purple-500 rounded-md text-sm"
        {...register("first")}
      />
      <input
        type="text"
        placeholder="Podaj nazwisko..."
        className="w-64 px-4 py-2 border-2 border-purple-500 rounded-md text-sm"
        {...register("last")}
      />
      <div>
        <p>{errors.first?.message}</p>
        <p>{errors.last?.message}</p>
      </div>
      <button type="submit" className="btn-outline mt-1">
        Dalej
      </button>
    </form>
  );
};
