import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import NotFound from "./components/NotFound";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-blog" element={<CreatePost />} />
      <Route path="/update-blog/:slug" element={<UpdatePost />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
