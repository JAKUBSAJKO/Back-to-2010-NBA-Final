import { configureStore } from "@reduxjs/toolkit";
import chooseDifficultyReducer from "../features/chooseDifficultySlice";

export const store = configureStore({
  reducer: {
    chooseDifficulty: chooseDifficultyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
