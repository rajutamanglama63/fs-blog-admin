import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../api/auth";

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
  reducers: {
    setSignup(state, action) {
      const resposneData = action.payload;

      return {
        ...state,
        successMsg: resposneData.message,
        errMsg: resposneData.error,
        warningMsg: resposneData.message,
        authData: resposneData.data,
      };
    },
  },
});

export const { setSignup } = authSlice.actions;

export const userSignup = (data: any) => {
  return async (dispatch: any) => {
    const user = await signup(data);

    dispatch(setSignup(user));
  };
};

export default authSlice.reducer;
