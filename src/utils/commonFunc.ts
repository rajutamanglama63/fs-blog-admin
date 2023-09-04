export const getCurrentUser = () => {
  let user: string | null = null;

  const loggedInUser = window.localStorage.getItem("loggedInUser");

  if (loggedInUser && loggedInUser !== "undefined") {
    const data: string | null = JSON.parse(loggedInUser)?.fullname;

    if (data) {
      user = data;
    }
  }

  return user;
};
