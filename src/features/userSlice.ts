import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: User;
}

interface User {
  first: string;
  last: string;
}

const initialState: UserState = {
  value: {
    first: "",
    last: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    removeUser: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
