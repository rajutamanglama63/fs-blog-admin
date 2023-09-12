import { useState } from "react";
import Navbar from "./components/Navbar";
import Router from "./Router";

const App = () => {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");
  return (
    <>
      <div className="flex">
        <div
          className={
            getNavWidth() + " min-h-screen border border-r transition-width"
          }
        >
          <Navbar closedNav={closedNav} />
        </div>
        <Router toggleNav={toggleNav} closedNav={closedNav} />
      </div>
    </>
  );
};

export default App;
