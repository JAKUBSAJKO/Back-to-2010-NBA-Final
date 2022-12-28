import { configureStore } from "@reduxjs/toolkit";
import chooseDifficultyReducer from "../features/chooseDifficultySlice";
import currentQuestionReducer from "../features/currentQuestionSlice";
import userPointsReducer from "../features/userPointsSlice";
import lakersPointsReducer from "../features/lakersPoints";
import userReducer from "../features/userSlice";
import userExistReducer from "../features/userExistSlice";

export const store = configureStore({
  reducer: {
    chooseDifficulty: chooseDifficultyReducer,
    currentQuestion: currentQuestionReducer,
    userPoints: userPointsReducer,
    lakersPoints: lakersPointsReducer,
    user: userReducer,
    userExistToken: userExistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
