import React from "react";
import { Link, useLocation } from "react-router-dom";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { RiShoppingBasketFill } from "react-icons/ri";
const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const textColor = isHome ? "text-white" : "text-black";
  const positionLocation = isHome ? "absolute" : "relative";
  const color = isHome ? "text-white" : "text-black";

  return (
    <header className={`${positionLocation} z-3 w-full`}>
      <div className="w-[90%] m-auto flex items-center justify-between pt-[32px]">
        <div className={`flex items-center gap-20 ${textColor}`}>
          <div>
            <Link to={"/"}>
              <h3 className="font-bold">soudemy</h3>
            </Link>
          </div>
          <ul className="md:flex items-center gap-[46px] hidden">
            <li className="font-medium">
              <Link to="/">Home</Link>
            </li>
            <li className="font-medium">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="font-medium">
              <Link to="/about">About us</Link>
            </li>
            <li className="font-medium">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[41px]">
          <div>
            <Link to="/basket">
              <RiShoppingBasketFill className={`text-[25px] ${color}`} />
            </Link>
          </div>
          <div>
            <DrawerComponent />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
