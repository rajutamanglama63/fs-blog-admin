import { createSlice } from "@reduxjs/toolkit";

interface blogState {
  successMsg: string;
  errMsg: string;
  warningMsg: string;
  blogData: object;
}

const initialState = {
  successMsg: "",
  errMsg: "",
  warningMsg: "",
  blogData: {},
} as blogState;

const blogSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default blogSlice.reducer;
