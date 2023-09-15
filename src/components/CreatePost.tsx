import React from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import {
  ImEye,
  ImFilePicture,
  ImFilesEmpty,
  ImSpinner11,
} from "react-icons/im";
import SearchForm from "./SearchForm";

const CreatePost = ({ toggleNav, closedNav }: any) => {
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
        <form className="p-2">
          <div className="w-9/12 h-screen flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-700">
                Create New Blog
              </h1>
              <div className="flex items-center space-x-5">
                <button className="flex items-center space-x-2 px-2 ring-1 ring-blue-500 rounded h-10 text-blue-500 hover:text-white hover:bg-blue-500 transition">
                  <ImSpinner11 />
                  <span>Reset</span>
                </button>
                <button className="flex items-center space-x-2 px-2 ring-1 ring-blue-500 rounded h-10 text-blue-500 hover:text-white hover:bg-blue-500 transition">
                  <ImEye />
                  <span>View</span>
                </button>
                <button className="h-10 w-36 px-5 hover:ring-1 bg-blue-500 text-white hover:text-blue-500 transition hover:bg-transparent rounded ring-blue-500">
                  Post
                </button>
              </div>
            </div>

            <div>
              <input id="featured" type="checkbox" hidden />
              <label
                className="flex items-center cursor-pointer group text-gray-700 space-x-2"
                htmlFor="featured"
              >
                <div className="h-4 w-4 border-2 border-gray-500 rounded-full flex items-center justify-center group-hover:border-blue-500">
                  <div className="h-2 w-2 bg-gray-500 rounded-full group-hover:bg-blue-500" />
                </div>
                <span className="group-hover:text-blue-500">Featured</span>
              </label>
            </div>

            <input
              type="text"
              placeholder="Post title"
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
            ></textarea>

            <div>
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                placeholder="Add tags with comma: React, ReactNative"
                className="w-full p-2 focus:ring-1 rounded outline-none  bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="tags">Meta description</label>
              <textarea
                placeholder="Write down little bit of post"
                className="resize-none outline-none w-full focus:ring-1 rounded h-28 bg-gray-100 p-2"
              ></textarea>
            </div>
          </div>

          <div className="w-1/4 px-2">
            <h1 className="text-xl font-semibold text-gray-700">Thumbnail</h1>
            <div>
              <input id="thumbnail" type="file" hidden />
              <label htmlFor="thumbnail">
                <div className="border border-dashed border-gray-500"></div>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
