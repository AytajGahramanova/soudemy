import React from "react";
import { Link } from "react-router-dom";
import Search from "../../images/search-normal.png";
import Bag from "../../images/bag-2.png";
import Menu from "../../images/menu.png";

const Header = () => {
  return (
    <header className="absolute z-3 w-full">
      <div className="w-[90%] m-auto flex items-center justify-between pt-[32px]">
        <div className="flex items-center gap-20 text-white">
          <div>
            <h3>soudemy</h3>
          </div>
          <ul className="flex items-center gap-[46px]">
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
            <img
              className="cursor-pointer w-[23px] text-white"
              src={Search}
              alt="search-img"
            />
          </div>
          <div>
            <img
              className="cursor-pointer w-[23px] text-white"
              src={Bag}
              alt="bag-img"
            />
          </div>
          <div>
            <img
              className="cursor-pointer w-[23px] text-white"
              src={Menu}
              alt="menu-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
