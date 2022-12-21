import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChooseDifficultyState {
  value: number;
}

const initialState: ChooseDifficultyState = {
  value: 0,
};

export const chooseDifficultySlice = createSlice({
  name: "chooseDifficulty",
  initialState,
  reducers: {
    setQuestionDifficulty: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuestionDifficulty } = chooseDifficultySlice.actions;
export default chooseDifficultySlice.reducer;
