import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import NotFound from "./components/NotFound";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import { useEffect, useState } from "react";
import { getCurrentUser } from "./utils/sessionManager";
import { useSelector } from "react-redux";

const Router = ({ toggleNav, closedNav }) => {
  const currUser = getCurrentUser();
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [reload, setReload] = useState(false);

  const user = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.authData.id) {
      setReload(true);
    }
  }, [user.authData.id]);

  useEffect(() => {
    if (currUser !== null) {
      setLoggedInUser(currUser);
    } else {
      setLoggedInUser(null);
    }
  }, [currUser]);

  console.log("user: ", currUser);
  return (
    <Routes>
      <Route
        path="/"
        element={
          loggedInUser !== null ? (
            <Home toggleNav={toggleNav} closedNav={closedNav} />
          ) : (
            <SigninForm />
          )
        }
      />
      <Route
        path="/create-blog"
        element={<CreatePost toggleNav={toggleNav} closedNav={closedNav} />}
      />
      <Route path="/update-blog/:slug" element={<UpdatePost />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
