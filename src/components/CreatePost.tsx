import React from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
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
          {/* <SearchForm /> */}
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto">
        <h1>Create Blog Form</h1>
      </div>
    </div>
  );
};

export default CreatePost;
