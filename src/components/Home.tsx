import React, { useEffect, useState } from "react";
import { getBlogs } from "../api/blog";
import BlogCard from "./BlogCard";
import { Blog } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../reducers/blogReducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

interface blogState {
  successMsg: string;
  errMsg: string;
  warningMsg: string;
  blogData: [];
  total: any;
}

const Home = () => {
  let offset = 0;
  const limit = 4;

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalBlogsCount, setTotalBlogsCount] = useState([]);

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const fetchedBlogs: blogState = useSelector((state: any) => state.blog);

  // const fetchBlogs = async () => {
  //   const response = await getBlogs(offset, limit);

  //   console.log("moreblog: ", response);
  //   setBlogs(response.data);
  //   setTotalBlogsCount(response.total);
  // };

  if (fetchedBlogs.blogData.length) {
    setBlogs(fetchedBlogs.blogData);
    setTotalBlogsCount(fetchedBlogs.total);
  }

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
    // fetchBlogs();
    dispatch(fetchBlogs(limit, offset));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
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
