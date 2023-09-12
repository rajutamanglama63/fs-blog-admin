import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import { getBlogs } from "../api/blog";
import BlogCard from "./BlogCard";

const Home = ({ toggleNav, closedNav }: any) => {
  const [blogs, setBlogs] = useState([]);
  console.log("blogs: ", blogs);
  let limit = 9;
  let offset = 0;

  useEffect(() => {
    const fetchBlogs = async (limit: any, offset: any) => {
      const blogData = await getBlogs(limit, offset);
      setBlogs(blogData.data);
    };

    fetchBlogs(limit, offset);
  }, []);
  return (
    <div className="flex-1 min-h-screen ">
      <div className="sticky top-0">
        <div className="flex items-center p-2 space-x-2">
          <button onClick={toggleNav}>
            {closedNav ? (
              <AiOutlineMenuUnfold size={25} />
            ) : (
              <>
                <AiOutlineMenuFold size={25} />
              </>
            )}
          </button>
          <SearchForm />
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-3 gap-3">
          {blogs?.map((blog: any) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
