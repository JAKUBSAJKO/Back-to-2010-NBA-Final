import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserPointsState {
  value: number;
}

const initialState: UserPointsState = {
  value: 0,
};

export const userPointsSlice = createSlice({
  name: "userPoints",
  initialState,
  reducers: {
    incrementUserPoints: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    clearUserPoints: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { incrementUserPoints, clearUserPoints } = userPointsSlice.actions;
export default userPointsSlice.reducer;
