import { AnyAction, ThunkDispatch, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "../api/blog";

interface blogState {
  successMsg: string;
  errMsg: string;
  warningMsg: string;
  blogData: [];
  total: number;
}

const initialState = {
  successMsg: "",
  errMsg: "",
  warningMsg: "",
  blogData: [],
  total: 0,
} as blogState;

const blogSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFetchBlogs(state, action) {
      const resposneData = action.payload;

      return {
        ...state,
        successMsg: resposneData.message,
        errMsg: resposneData.error,
        warningMsg: resposneData.message,
        blogData: resposneData.data,
        total: resposneData.total,
      };
    },
  },
});

export const { setFetchBlogs } = blogSlice.actions;

export const fetchBlogs = (limit: number, offset: number) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    const blogs = await getBlogs(limit, offset);

    dispatch(setFetchBlogs(blogs));
  };
};
export default blogSlice.reducer;
