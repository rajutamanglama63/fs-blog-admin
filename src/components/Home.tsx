import React, { useEffect, useState } from "react";
import { getBlogs } from "../api/blog";
import BlogCard from "./BlogCard";
import { Blog } from "../types/types";

const Home = () => {
  const offset = 0;
  const limit = 5;

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const response = await getBlogs(limit, offset);

    // console.log(response);
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Home;
