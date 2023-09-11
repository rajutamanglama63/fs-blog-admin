import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "../api/auth";
import { setUser } from "../utils/sessionManager";

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
      console.log(resposneData);
      return {
        ...state,
        successMsg: resposneData.message,
        errMsg: resposneData.error,
        warningMsg: resposneData.message,
        authData: resposneData,
      };
    },

    setSignin(state, action) {
      const resposneData = action.payload;

      return {
        ...state,
        successMsg: resposneData.message,
        errMsg: resposneData.error,
        warningMsg: resposneData.message,
        authData: resposneData,
      };
    },
  },
});

export const { setSignup, setSignin } = authSlice.actions;

export const userSignup = (data: any) => {
  return async (dispatch: any) => {
    const user = await signup(data);

    setUser(user.fullName);

    dispatch(setSignup(user));
  };
};

export const userSignin = (data: any) => {
  return async (dispatch: Dispatch) => {
    const user = await signin(data);

    setUser(user.fullName);

    dispatch(setSignin(user));
  };
};

export default authSlice.reducer;
