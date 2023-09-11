export const getCurrentUser = () => {
  let user: string | null = null;

  const loggedInUser = window.localStorage.getItem("loggedInUser");

  if (loggedInUser && loggedInUser !== "undefined") {
    const data: string | null = loggedInUser;

    if (data) {
      user = data;
    }
  }

  return user;
};

export const setUser = (value: string) => {
  window.localStorage.setItem("loggedInUser", value);
};
