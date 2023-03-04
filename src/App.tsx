import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./routes/routes";
import { Spinner } from "./components/Spinner/Spinner";
import { useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";

const Introduction = lazy(() => import("./pages/Introduction"));
const Info = lazy(() => import("./pages/introduce/Info"));
const User = lazy(() => import("./pages/introduce/User"));
const Rules = lazy(() => import("./pages/introduce/Rules"));
const Start = lazy(() => import("./pages/introduce/Start"));
const Choose = lazy(() => import("./pages/Choose"));
const Question = lazy(() => import("./pages/Question"));
const Finish = lazy(() => import("./pages/Finish"));
const Win = lazy(() => import("./pages/finish/Win"));
const Failure = lazy(() => import("./pages/finish/Failure"));

const App = () => {
  const userExist = useAppSelector(
    (state: RootState) => state.userExistToken.value
  );

  return (
    <Router>
      <div>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route index element={<Introduction />} />
            <Route path={routes.info} element={<Info />} />
            <Route path={routes.user} element={<User />} />
            <Route path={routes.rules} element={<Rules />} />
            <Route path={routes.start} element={<Start />} />
            <Route
              path={routes.choose}
              element={userExist ? <Choose /> : <User />}
            />
            <Route
              path={routes.question}
              element={userExist ? <Question /> : <User />}
            />
            <Route
              path={routes.finish}
              element={userExist ? <Finish /> : <User />}
            />
            <Route path={routes.win} element={userExist ? <Win /> : <User />} />
            <Route
              path={routes.failure}
              element={userExist ? <Failure /> : <User />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
