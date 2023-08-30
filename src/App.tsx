import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import Router from "./Router";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");
  return (
    <div className="flex">
      {/* nav section */}
      <div
        className={
          getNavWidth() + " min-h-screen border border-r transition-width"
        }
      >
        <div className="sticky top-0">
          <Navbar closed={closedNav} />
        </div>
      </div>

      {/* content section */}
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
          <Router />
        </div>
      </div>
    </div>
  );
};

export default App;
