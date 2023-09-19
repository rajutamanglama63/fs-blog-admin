import client from "./client";

export const addBlog = async (blogData: any) => {
  try {
    const { data } = await client.post("/blog", blogData, {
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

export const delBlog = async (id: number) => {
  try {
    const { data } = await client.delete(`/blog/${id}`, {
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

export const searchBlog = async (
  name: string,
  limit: number,
  offset: number
) => {
  try {
    const { data } = await client.get(
      `/blog/search?name=${name}&limit=${limit}&offset=${offset}`,
      { withCredentials: true }
    );

    return data;
  } catch (error) {
    const { response }: any = error;
    if (response?.data) {
      return response.data;
    }
    return error;
  }
};
