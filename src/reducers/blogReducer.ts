import { createSlice } from "@reduxjs/toolkit";
import { addBlog, delBlog, getBlogs } from "../api/blog";

interface blogState {
  successMsg: string;
  errMsg: string;
  warningMsg: string;
  blogData: Object[];
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
    appendBlog(state, action) {
      const responseData = action.payload;

      // Create a new array by concatenating the existing blogData with the new data
      const newBlogData: Object[] = state.blogData.concat(responseData);

      return {
        ...state,
        successMsg: responseData.message,
        errMsg: responseData.error,
        warningMsg: responseData.message,
        blogData: newBlogData,
      };
    },
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

export const { appendBlog, setFetchBlogs, deleteBlog } = blogSlice.actions;

export const postBlog = (blogData: any) => {
  return async (dispatch: any) => {
    const response = await addBlog(blogData);

    dispatch(appendBlog(response));
  };
};

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
