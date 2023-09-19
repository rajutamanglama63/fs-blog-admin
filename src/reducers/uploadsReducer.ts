import { createSlice } from "@reduxjs/toolkit";
import { postThumbnail } from "../api/uploads";

interface uploadsState {
  successMsg: string;
  errMsg: string;
  warningMsg: string;
  imageData: object;
}

const initialState = {
  successMsg: "",
  errMsg: "",
  warningMsg: "",
  imageData: {},
} as uploadsState;

const uploadsSlice = createSlice({
  name: "uploads",
  initialState,
  reducers: {
    setUploads(state, action) {
      const resposneData = action.payload;
      console.log(resposneData);
      return {
        ...state,
        successMsg: resposneData.message,
        errMsg: resposneData.error,
        warningMsg: resposneData.message,
        thumbnailData: resposneData.data,
      };
    },
  },
});

export const { setUploads } = uploadsSlice.actions;

export const thumbnailUpload = (formData: any) => {
  return async (dispatch: any) => {
    const uploadedThumbnailData = await postThumbnail(formData);

    dispatch(setUploads(uploadedThumbnailData));
  };
};

export default uploadsSlice.reducer;
