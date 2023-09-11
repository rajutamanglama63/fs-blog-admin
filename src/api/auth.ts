import client from "./client";

export const signup = async (userData: object) => {
  try {
    const { data } = await client.post("/auth/signup", userData);

    return data;
  } catch (error) {
    const { response }: any = error;
    if (response?.data) {
      return response.data;
    }
    return error;
  }
};

export const signin = async (credentials: object) => {
  try {
    const { data } = await client.post("/auth/signin", credentials);

    return data;
  } catch (error) {
    const { response }: any = error;
    if (response?.data) {
      return response.data;
    }
    return error;
  }
};
