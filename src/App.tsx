import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import Router from "./Router";
import Navbar from "./components/Navbar";

const App = () => {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");
  return (
    <div className="flex">
      {/* nav section */}
      <div className={getNavWidth() + " h-screen bg-red-100 transition-width"}>
        <Navbar closed={closedNav} />
      </div>

      {/* content section */}
      <div className="flex-1 min-h-screen bg-yellow-100">
        <button onClick={toggleNav}>
          {closedNav ? (
            <AiOutlineMenuUnfold size={25} />
          ) : (
            <>
              <AiOutlineMenuFold size={25} />
            </>
          )}
        </button>
        <div className="max-w-screen-lg mx-auto">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default App;
