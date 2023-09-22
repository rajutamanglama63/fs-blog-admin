import client from "./client";

export const postThumbnail = async (formData: any) => {
  try {
    const { data } = await client.post("/upload-file", formData, {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    const { response }: any = error;
    if (response?.data) {
      return response.data;
    }
    return error;
  }
};
