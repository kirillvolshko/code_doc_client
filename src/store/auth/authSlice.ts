"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  access_token: string | null;
  refresh_token: string | null;
}

const initialState: AuthState = {
  access_token: "",
  refresh_token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refresh_token = action.payload;
    },
    removeToken: (state) => {
      state.access_token = "";
    },
  },
});
export const { setToken, removeToken, setRefreshToken } = authSlice.actions;

export default authSlice.reducer;
