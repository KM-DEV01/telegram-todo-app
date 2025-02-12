import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./user";

const initialState: User = {
  id: 0,
  first_name: "",
  last_name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(_state, action: PayloadAction<User>) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
