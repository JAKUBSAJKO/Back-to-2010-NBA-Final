import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch } from "../../app/hooks";
import { addUser } from "../../features/userSlice";
import { User } from "../../features/userSlice";
import { createUserExistToken } from "../../features/userExistSlice";
import { routes } from "../../routes/routes";

const MATCHES = /^[\s\p{L}]+$/u;

export const UserForm = () => {
  const schema = yup.object().shape({
    first: yup
      .string()
      .required("Imię jest wymagane!")
      .matches(MATCHES, "Imię nie może zawierać cyfr i znaków specjalnych"),
    last: yup
      .string()
      .required("Nazwisko jest wymagane!")
      .matches(MATCHES, "Nazwisko nie może zawierać cyfr i znaków specjalnych"),
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
    dispatch(createUserExistToken());
    navigate(routes.rules);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl flex flex-col justify-center items-center gap-2"
    >
      <input
        type="text"
        placeholder="Podaj imię..."
        className="w-64 px-4 py-2 border-2 border-lakers-purple rounded-md text-sm 2xl:scale-110"
        {...register("first")}
      />
      <p className="text-xs text-error-form self-start pl-4 my-1 2xl:text-sm 2xl:pl-1">
        {errors.first?.message}
      </p>
      <input
        type="text"
        placeholder="Podaj nazwisko..."
        className="w-64 px-4 py-2 border-2 border-lakers-purple rounded-md text-sm 2xl:scale-110"
        {...register("last")}
      />
      <p className="text-xs text-error-form self-start pl-4 my-1 2xl:text-sm 2xl:pl-1">
        {errors.last?.message}
      </p>
      <button type="submit" className="btn-outline mt-4">
        Dalej
      </button>
    </form>
  );
};
