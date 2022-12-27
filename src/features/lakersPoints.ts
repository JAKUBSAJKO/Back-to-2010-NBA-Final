import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LakersPointsState {
  value: number;
}

const initialState: LakersPointsState = {
  value: 63,
};

export const lakersPointsSlice = createSlice({
  name: "lakersPoints",
  initialState,
  reducers: {
    incrementLakersPoints: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    clearLakersPoints: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { incrementLakersPoints, clearLakersPoints } =
  lakersPointsSlice.actions;
export default lakersPointsSlice.reducer;
