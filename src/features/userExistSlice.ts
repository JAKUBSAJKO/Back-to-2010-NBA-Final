import { createSlice } from "@reduxjs/toolkit";

interface UserExistState {
  value: boolean;
}

const initialState: UserExistState = {
  value: false,
};

const userExistSlice = createSlice({
  name: "userExist",
  initialState,
  reducers: {
    createUserExistToken: (state) => {
      state.value = !initialState.value;
    },
    removeUserExistToken: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { createUserExistToken, removeUserExistToken } =
  userExistSlice.actions;
export default userExistSlice.reducer;
