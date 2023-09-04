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
