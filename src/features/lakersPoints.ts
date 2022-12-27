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
  },
});

export const { incrementLakersPoints } = lakersPointsSlice.actions;
export default lakersPointsSlice.reducer;
