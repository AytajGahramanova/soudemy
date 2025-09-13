import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { RiShoppingBasketFill } from "react-icons/ri";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const inactiveLinkColor = isHome ? "text-white" : "text-black";

  return (
    <header className={`${isHome ? "absolute" : "relative"} z-3 w-full`}>
      <div className="w-[90%] m-auto flex items-center justify-between pt-[32px]">
        <div className={`flex items-center gap-20`}>
          <div>
            <Link to={"/"}>
              <h3
                className={`font-bold ${isHome ? "text-white" : "text-black"}`}
              >
                soudemy
              </h3>
            </Link>
          </div>
          <ul className="md:flex items-center gap-[46px] hidden">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "About us", path: "/about" },
              { name: "Blog", path: "/blog" },
            ].map((link) => (
              <li key={link.name} className="font-medium">
                <NavLink
                  end
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#A65009]"
                      : `${inactiveLinkColor} hover:text-[#A65009] transition`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-[41px]">
          <div>
            <Link to="/basket">
              <RiShoppingBasketFill
                className={`text-[25px] ${
                  isHome ? "text-white" : "text-black"
                }`}
              />
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
