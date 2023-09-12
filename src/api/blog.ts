import client from "./client";

export const getBlogs = async (limit: number, offset: number) => {
  try {
    const { data } = await client.get(`/blog?limit=${limit}&offset=${offset}`, {
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
