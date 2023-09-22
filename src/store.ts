import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import blogReducer from "./reducers/blogReducer";
import uploadsReducer from "./reducers/uploadsReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    blog: blogReducer,
    uploads: uploadsReducer,
  },
});

export default store;
