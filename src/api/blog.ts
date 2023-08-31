import client from "./client";

export const getBlogs = async (offset: number, limit: number) => {
  try {
    const { data } = await client.get(`/blog?limit=${limit}&offset=${offset}`);

    return data;
  } catch (error) {
    const { response }: any = error;
    if (response?.data) {
      return response.data;
    }
    return error;
  }
};
