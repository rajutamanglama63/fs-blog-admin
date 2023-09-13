import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import SearchForm from "./SearchForm";
import { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../reducers/blogReducer";
import { useSearch } from "../context/SearchProvider";

const Home = ({ toggleNav, closedNav }: any) => {
  const {searchResult} = useSearch()
  const dispatch: any = useDispatch();
  const blogs = useSelector((state: any) => state.blog);
  let limit = 9;
  let offset = 0;

  const blog = useSelector((state: any) => state.blog);
  console.log("blog in reducer: ", blog.successMsg);

  useEffect(() => {
    //   const fetchBlogs = async (limit: any, offset: any) => {
    //     const blogData = await getBlogs(limit, offset);
    //     setBlogs(blogData.data);
    //   };

    //   fetchBlogs(limit, offset);
    dispatch(fetchBlogs(limit, offset));
  }, []);

  useEffect(() => {
    if (blog.successMsg) {
      dispatch(fetchBlogs(limit, offset));
    }
  }, [blog.successMsg]);

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
          {searchResult.length ? searchResult.map((blog: any) => (<BlogCard key={blog.id} blog={blog} />)) : (blogs.blogData?.map((blog: any) => (
            <BlogCard key={blog.id} blog={blog} />
          )))}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
