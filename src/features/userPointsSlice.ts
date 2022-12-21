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
  },
});

export const { incrementUserPoints } = userPointsSlice.actions;
export default userPointsSlice.reducer;
