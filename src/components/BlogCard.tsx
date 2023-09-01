import React from "react";
import dateFormat from "dateformat";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { Blog } from "../types/types";
import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: Blog; // Explicitly define the type of the 'blog' prop
}
const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  let thumbnailUrl;
  if (!blog) return null;
  if (blog.thumbnail) {
    if (blog.thumbnail.url) {
      thumbnailUrl = blog.thumbnail.url;
    }
  }
  return (
    <div className="bg-white shadow-sm rounded flex flex-col">
      <img
        className="aspect-video"
        src={thumbnailUrl || "./underwater.jpg"}
        alt="blog.title"
      />
      <div className="p-2 flex-1 flex flex-col justify-between">
        <h1 className="text-lg font-bold text-gray-700">{blog.title}</h1>
        <p className="text-gray-500">{blog.desc.substring(0, 80) + "..."}</p>
        <div className="flex justify-between py-2">
          <p className="text-gray-500 text-sm">
            {dateFormat(blog.createdAt, "mediumDate")}
          </p>
          <p className="text-gray-500 text-sm">{blog.tags.join(", ")}</p>
        </div>
        <div className="flex space-x-2">
          <Link
            to={`/update-blog/${blog.slug}`}
            className="w-8 h-8 bg-blue-400 hover:bg-blue-600 flex justify-center items-center rounded-full text-white"
          >
            <BsPencilSquare />
          </Link>
          <button className="w-8 h-8 bg-red-400 hover:bg-red-600 flex justify-center items-center rounded-full text-white">
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
