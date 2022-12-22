import { User } from "../features/userSlice";

export const replaceWordsInComments = (
  sentence: string,
  user: User
): string => {
  const first = /imię/gi;
  const last = /nazwisko/gi;
  return sentence.replaceAll(first, user.first).replaceAll(last, user.last);
};
