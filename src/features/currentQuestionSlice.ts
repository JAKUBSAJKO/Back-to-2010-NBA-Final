import { createSlice } from "@reduxjs/toolkit";

interface CurrentQuestionState {
  value: number;
}

const initialState: CurrentQuestionState = {
  value: 1,
};

export const currentQuestionSlice = createSlice({
  name: "currentQuestion",
  initialState,
  reducers: {
    incrementCurrentQuestion: (state) => {
      state.value += 1;
    },
  },
});

export const { incrementCurrentQuestion } = currentQuestionSlice.actions;
export default currentQuestionSlice.reducer;
