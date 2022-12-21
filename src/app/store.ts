import { configureStore } from "@reduxjs/toolkit";
import chooseDifficultyReducer from "../features/chooseDifficultySlice";
import currentQuestionReducer from "../features/currentQuestionSlice";
import userPointsReducer from "../features/userPointsSlice";
import lakersPointsReducer from "../features/lakersPoints";

export const store = configureStore({
  reducer: {
    chooseDifficulty: chooseDifficultyReducer,
    currentQuestion: currentQuestionReducer,
    userPoints: userPointsReducer,
    lakersPoints: lakersPointsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
