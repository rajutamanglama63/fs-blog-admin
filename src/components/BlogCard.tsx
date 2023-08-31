import React from "react";
import { Blog } from "../types/types";

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
    <div>
      <img src={thumbnailUrl || "./logo192.png"} alt="blog.title" />
    </div>
  );
};

export default BlogCard;
