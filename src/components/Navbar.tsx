import React, { ReactNode } from "react";
import { AiFillFileAdd, AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  value: string;
  Icon: ReactNode;
  closed: boolean;
}

interface NavbarProps {
  closed: boolean;
}

const NavItem = ({ to, value, Icon, closed }: NavItemProps) => {
  const commonClasses =
    "flex items-center space-x-2 w-full p-2 block whitespace-nowrap";
  const activeClass = commonClasses + " bg-blue-500 text-white";
  const inActiveClass = commonClasses + " text-grey-500";
  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
      to={to}
    >
      {Icon}
      <span
        className={
          closed
            ? "w-0 transition-width overflow-hidden"
            : "w-full transition-full overflow-hidden"
        }
      >
        {value}
      </span>
    </NavLink>
  );
};

const Navbar = ({ closedNav }: any) => {
  return (
    <nav>
      <div className="flex justify-center p-3">
        <h3 className={closedNav ? "invisible" : "text-2xl font-bold"}>
          ADMIN
        </h3>
      </div>
      <ul>
        <li>
          <NavItem
            closed={closedNav}
            to="/"
            value="Home"
            Icon={<AiOutlineHome size={24} />}
          />
        </li>
        <li>
          <NavItem
            closed={closedNav}
            to="/create-blog"
            value="Create blog"
            Icon={<AiFillFileAdd size={24} />}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
