import { createSlice } from "@reduxjs/toolkit";

interface authState {
  successMsg: string;
  errMsg: string;
  warningMsg: string;
  authData: object;
}

const initialState = {
  successMsg: "",
  errMsg: "",
  warningMsg: "",
  authData: {},
} as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
