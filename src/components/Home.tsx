import React, { useEffect, useState } from "react";
import { getBlogs } from "../api/blog";
import BlogCard from "./BlogCard";
import { Blog } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../reducers/blogReducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getCurrentUser } from "../utils/commonFunc";
import SignupForm from "./SignupForm";

interface blogState {
  successMsg: string;
  errMsg: string;
  warningMsg: string;
  blogData: Blog[];
  total: any;
}

const Home = () => {
  let offset = 0;
  const limit = 4;

  // const [blogs, setBlogs] = useState<Blog[]>([]);
  // const [totalBlogsCount, setTotalBlogsCount] = useState([]);

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const fetchedBlogs: blogState = useSelector((state: any) => state.blog);

  const { blogData, total } = fetchedBlogs;

  console.log("blogData: ", blogData);

  const getPaginationCount = (length: any) => {
    const division = length / limit;

    if (division % 1 !== 0) {
      return Math.floor(division) + 1;
    }

    return division;
  };

  // const paginationCount = getPaginationCount(totalBlogsCount);
  // console.log("paginationCount: ", paginationCount);
  // const paginationArr = new Array(paginationCount).fill(" ");

  // const fetchMoreBlogs = async (index: any) => {
  //   offset = index;
  //   await dispatch(fetchBlogs(limit, offset));
  // };

  useEffect(() => {
    dispatch(fetchBlogs(limit, offset));
  }, [dispatch, limit, offset]);

  const currentUser = getCurrentUser();

  return (
    <div>
      {currentUser !== null ? (
        <>
          <div className="grid grid-cols-3 gap-3">
            {blogData?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </>
      ) : (
        <>
          <SignupForm />
        </>
      )}

      {/* <div className="py-5 flex justify-center items-center space-x-3">
        {paginationArr.map((_, index) => (
          <button
            key={index}
            onClick={() => fetchMoreBlogs(index)}
            className={
              index === offset
                ? "text-blue-500 border-2 border-blue-500 p-2 w-8 h-8 flex justify-center items-center"
                : "text-gray-500"
            }
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
