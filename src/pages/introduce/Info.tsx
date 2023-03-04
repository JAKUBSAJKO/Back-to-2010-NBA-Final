import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import { texts } from "../../constants/static-text";
import { routes } from "../../routes/routes";

export default function Info() {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <div className="w-full min-h-screen p-8 flex flex-col justify-center items-center gap-8 md:gap-4 2xl:gap-8">
      <div className="text-base md:max-w-3xl md:border-2 md:border-lakers-purple md:rounded-md md:p-8 2xl:max-w-5xl 2xl:text-xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(20)
              .typeString(texts.startInformationPart1)
              .pauseFor(1000)
              .typeString(texts.startInformationPart2)
              .pauseFor(1000)
              .typeString(texts.startInformationPart3)
              .pauseFor(1000)
              .typeString(texts.startInformationPart4)
              .pauseFor(1000)
              .typeString(texts.startInformationPart5)
              .pauseFor(1000)
              .typeString(texts.startInformationPart6)
              .pauseFor(1000)
              .typeString(texts.startInformationPart7)
              .pauseFor(1000)
              .typeString(texts.startInformationPart8)
              .callFunction(() => {
                setShowBtn(true);
              })
              .start();
          }}
        />
      </div>
      <Link
        to={routes.user}
        className={`${showBtn ? "visible btn-outline" : "invisible"}`}
      >
        Dalej
      </Link>
    </div>
  );
}
