import client from "./client";

export const signup = async (userData: object) => {
  try {
    const { data } = await client.post("/auth/signup", userData, {
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

export const signin = async (credentials: object) => {
  try {
    const { data } = await client.post("/auth/signin", credentials, {
      withCredentials: true, // Enable cookies in the request
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
