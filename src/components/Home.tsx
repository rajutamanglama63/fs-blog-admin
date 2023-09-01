import React, { useEffect, useState } from "react";
import { getBlogs } from "../api/blog";
import BlogCard from "./BlogCard";
import { Blog } from "../types/types";

const Home = () => {
  let offset = 0;
  const limit = 9;

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalBlogsCount, setTotalBlogsCount] = useState([]);

  const fetchBlogs = async () => {
    const response = await getBlogs(offset, limit);

    console.log("moreblog: ", response.data);
    setBlogs(response.data);
    setTotalBlogsCount(response.total);
  };

  const getPaginationCount = (length: any) => {
    const division = length / limit;

    if (division % 1 !== 0) {
      return Math.floor(division) + 1;
    }

    return division;
  };

  const paginationCount = getPaginationCount(totalBlogsCount);
  console.log("paginationCount: ", paginationCount);
  const paginationArr = new Array(paginationCount).fill(" ");

  const fetchMoreBlogs = async (index: any) => {
    offset = index;
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="py-5 flex justify-center items-center space-x-3">
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
      </div>
    </div>
  );
};

export default Home;
