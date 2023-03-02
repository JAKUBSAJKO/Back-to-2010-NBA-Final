import { GiOldMicrophone } from "react-icons/gi";

import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { replaceWordsInComments } from "../../helpers/replaceWordsInComments";
import { IResponse } from "../../hooks/useQuestion";
import { UserPoints } from "../UserPoints/UserPoints";

interface Props {
  data: IResponse | undefined;
  isAfterPick: boolean;
  isCorrectAnswer: boolean;
}

export function CommentsBoard({ data, isAfterPick, isCorrectAnswer }: Props) {
  const user = useAppSelector((state: RootState) => state.user.value);

  return (
    <div className="w-full h-24 bg-mango flex justify-center items-center gap-4">
      <div className="border-2 border-black rounded-lg px-16 py-6 flex items-center">
        <GiOldMicrophone className="text-2xl mr-2" />
        <p>
          {!isAfterPick
            ? replaceWordsInComments(
                data?.allQuestions[0].initialcomment || "",
                user
              )
            : isCorrectAnswer
            ? replaceWordsInComments(
                data?.allQuestions[0].goodcomment || "",
                user
              )
            : replaceWordsInComments(
                data?.allQuestions[0].badcomment || "",
                user
              )}
        </p>
      </div>
      <UserPoints />
    </div>
  );
}
