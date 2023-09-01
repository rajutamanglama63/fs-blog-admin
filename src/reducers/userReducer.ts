import { createSlice } from "@reduxjs/toolkit";

interface userState {
  successMsg: string;
  errMsg: string;
  warningMsg: string;
  userData: object;
}

const initialState = {
  successMsg: "",
  errMsg: "",
  warningMsg: "",
  userData: {},
} as userState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
