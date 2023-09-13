import { createSlice } from "@reduxjs/toolkit";
import { delBlog, getBlogs } from "../api/blog";

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
    deleteBlog(state, action) {
      const resposneData = action.payload;

      return resposneData.affected === 1
        ? {
            ...state,
            successMsg: "Successfully Deleted.",
            errMsg: "",
            warningMsg: "",
          }
        : {
            ...state,
            successMsg: "",
            errMsg: "",
            warningMsg: "Invalid attempt!",
          };
    },
  },
});

export const { setFetchBlogs, deleteBlog } = blogSlice.actions;

export const fetchBlogs = (limit: number, offset: number) => {
  return async (dispatch: any) => {
    const blogs = await getBlogs(limit, offset);

    dispatch(setFetchBlogs(blogs));
  };
};

export const removeBlog = (blogId: number) => {
  return async (dispatch: any) => {
    const response = await delBlog(blogId);

    dispatch(deleteBlog(response));
  };
};

export default blogSlice.reducer;
