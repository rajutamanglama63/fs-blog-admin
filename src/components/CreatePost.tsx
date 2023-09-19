import React, { FormEvent, useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import {
  ImEye,
  ImFilePicture,
  ImFilesEmpty,
  ImSpinner11,
  ImSpinner3,
} from "react-icons/im";
import SearchForm from "./SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { thumbnailUpload } from "../reducers/uploadsReducer";
import { useNavigate } from "react-router-dom";
import { postBlog } from "../reducers/blogReducer";

const CreatePost = ({ toggleNav, closedNav }: any) => {
  const dispatch: any = useDispatch();
  const thumbnail = useSelector((state: any) => state.uploads);

  const navigate = useNavigate();

  const [blogInfo, setBlogInfo] = useState({
    title: "",
    desc: "",
    meta: "",
    tagsInput: "",
    tags: [""],
    featured: false,
    thumbnail: "",
    image: "",
  });

  const [uploadedThumbnailUrl, setUploadedThumbnailUrl] = useState("");
  const [imageUploading, setImageUploading] = useState(false);
  console.log("loading: ", imageUploading);

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;

    // if (name === "thumbnail") {
    //   const file = e.target.files[0];

    //   if (!file.type?.includes("image")) {
    //     return alert("This is not an image!");
    //   }

    //   setBlogInfo({ ...blogInfo, thumbnail: file });
    //   return setUploadedThumbnailUrl(URL.createObjectURL(file));
    // }

    if (name === "featured") {
      return setBlogInfo({ ...blogInfo, [name]: checked });
    }

    if (name === "tagsInput") {
      const newTags = blogInfo.tagsInput.split(", ");
      if (newTags.length > 4) {
        console.log("Only first four tags will be selected.");
      }
    }

    if (name === "meta" && blogInfo.meta.length >= 150) {
      return setBlogInfo({ ...blogInfo, meta: value.substring(0, 149) });
    }

    // if (uploadedThumbnailUrl) {
    setBlogInfo({
      ...blogInfo,
      tags: blogInfo.tagsInput.split(", "),
      thumbnail: uploadedThumbnailUrl,
      [name]: value,
    });
    // }
  };

  const handleImageUpload = async (e: any) => {
    if (imageUploading) return;

    const file = e.target.files[0];

    if (!file.type?.includes("image")) {
      return alert("This is not an image!");
    }

    setImageUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    // const data = await postThumbnail(formData);
    dispatch(thumbnailUpload(formData));
  };

  useEffect(() => {
    if (thumbnail.thumbnailData) {
      setImageUploading(false);
      setUploadedThumbnailUrl(thumbnail.thumbnailData);
    }
  }, [thumbnail.thumbnailData]);

  const clear = () => {
    setBlogInfo({
      title: "",
      desc: "",
      meta: "",
      tagsInput: "",
      tags: [""],
      featured: false,
      thumbnail: "",
      image: "",
    });
    setUploadedThumbnailUrl("");
  };

  const blogSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("blogInfo: ", blogInfo);
    dispatch(postBlog(blogInfo));
    clear();
    navigate("/");
  };

  return (
    <div className="flex-1 min-h-screen">
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
        <form className="p-2 flex" onSubmit={blogSubmitHandler}>
          <div className="w-9/12 h-screen flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-700">
                Create New Blog
              </h1>
              <div className="flex items-center space-x-5">
                <button
                  type="button"
                  onClick={() => clear()}
                  className="flex items-center space-x-2 px-2 ring-1 ring-blue-500 rounded h-10 text-blue-500 hover:text-white hover:bg-blue-500 transition"
                >
                  <ImSpinner11 />
                  <span>Reset</span>
                </button>
                <button
                  type="button"
                  className="flex items-center space-x-2 px-2 ring-1 ring-blue-500 rounded h-10 text-blue-500 hover:text-white hover:bg-blue-500 transition"
                >
                  <ImEye />
                  <span>View</span>
                </button>
                <button
                  type="submit"
                  className="h-10 w-36 px-5 hover:ring-1 bg-blue-500 text-white hover:text-blue-500 transition hover:bg-transparent rounded ring-blue-500"
                >
                  Post
                </button>
              </div>
            </div>

            <div className="flex">
              <input
                id="featured"
                name="featured"
                onChange={handleChange}
                type="checkbox"
                hidden
              />
              <label
                className="select-none flex items-center cursor-pointer group text-gray-700 space-x-2"
                htmlFor="featured"
              >
                <div className="h-4 w-4 border-2 border-gray-500 rounded-full flex items-center justify-center group-hover:border-blue-500">
                  {blogInfo.featured && (
                    <div className="h-2 w-2 bg-gray-500 rounded-full group-hover:bg-blue-500" />
                  )}
                </div>
                <span className="group-hover:text-blue-500">Featured</span>
              </label>
            </div>

            <input
              type="text"
              placeholder="Post title"
              name="title"
              value={blogInfo.title}
              onChange={handleChange}
              className="w-full p-2 text-xl focus:ring-1 rounded outline-none font-semibold bg-gray-100"
            />

            <div className="flex space-x-2">
              <div>
                <input id="image-input" type="file" hidden />
                <label
                  htmlFor="image-input"
                  className="flex items-center space-x-2 px-2 ring-1 ring-gray-500 rounded h-10 text-gray-500 hover:text-white hover:bg-gray-500 transition cursor-pointer"
                >
                  <span>Place Image</span>
                  <ImFilePicture />
                </label>
              </div>

              <div className="flex flex-1 justify-between rounded overflow-hidden bg-gray-400">
                <input
                  type="text"
                  value="https://res.cloudinary.com/raju-123/aadfadaddasdfa/848789402029384920/image/pic.jpg"
                  disabled
                  className="bg-transparent px-2 text-white w-full"
                />
                <button className="text-xs flex flex-col items-center text-white bg-gray-700 p-1 self-stretch justify-center">
                  <ImFilesEmpty />
                  <span>Copy</span>
                </button>
              </div>
            </div>

            <textarea
              className="resize-none outline-none w-full focus:ring-1 rounded flex-1 font-mono text-lg tracking-wide bg-gray-100 p-2"
              placeholder="## Markdown"
              name="desc"
              value={blogInfo.desc}
              onChange={handleChange}
            ></textarea>

            <div>
              <label className="text-gray-500" htmlFor="tags">
                Tags
              </label>
              <input
                type="text"
                placeholder="Add tags with comma: React, ReactNative"
                name="tagsInput"
                value={blogInfo.tagsInput}
                onChange={handleChange}
                className="w-full p-2 focus:ring-1 rounded outline-none  bg-gray-100"
              />
            </div>

            <div>
              <label className="text-gray-500" htmlFor="tags">
                Meta description {blogInfo.meta.length} / 150
              </label>
              <textarea
                placeholder="Write down little bit of post"
                name="meta"
                value={blogInfo.meta}
                onChange={handleChange}
                className="resize-none outline-none w-full focus:ring-1 rounded h-28 bg-gray-100 p-2"
              ></textarea>
            </div>
          </div>

          <div className="w-1/4 px-2">
            <h1 className="text-xl font-semibold text-gray-700">Thumbnail</h1>
            <div>
              <input
                id="thumbnail"
                name="thumbnail"
                onChange={handleImageUpload}
                type="file"
                hidden
              />
              <label htmlFor="thumbnail">
                {/* {imageUploading ? (
                  <ImSpinner11 className="animate-rotate" /> 
                  ) : ( uploadedThumbnailUrl ?
                    <>
                      <img
                        src={uploadedThumbnailUrl}
                        className="aspect-video shadow-sm rounded"
                        alt="thumbnail image"
                      />
                    </>
                  ) : (
                  <>
                    <div className="border border-dashed border-gray-500 aspect-video text-gray-500  flex items-center justify-center flex-col">
                      <span className="text-lg font-semibold">
                        Select thumbnail
                      </span>
                      <span className="text-sm">Recommended size</span>
                      <span className="text-sm">1280 * 720</span>
                    </div>
                  </>
                )} */}

                {imageUploading === true ? (
                  <div className="border border-dashed border-gray-500 aspect-video text-gray-500 flex items-center justify-center">
                    <ImSpinner3 className="animate-spin" />
                  </div>
                ) : uploadedThumbnailUrl ? (
                  <img
                    src={uploadedThumbnailUrl}
                    className="aspect-video shadow-sm rounded"
                    alt="thumbnail image"
                  />
                ) : (
                  <>
                    <div className="border border-dashed border-gray-500 aspect-video text-gray-500  flex items-center justify-center flex-col">
                      <span className="text-lg font-semibold">
                        Select thumbnail
                      </span>
                      <span className="text-sm">Recommended size</span>
                      <span className="text-sm">1280 * 720</span>
                    </div>
                  </>
                )}
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
