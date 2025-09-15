import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const pages = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const location = useLocation();
  const isHome = location.pathname === "/";
  const color = isHome ? "text-white" : "text-black";

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className="flex items-center justify-center flex-col text-center">
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton>
              <Link
                to={page.path}
                className="w-full block py-2 text-lg text-gray-800 hover:text-blue-500"
              >
                {page.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <IoMenu
        onClick={toggleDrawer(true)}
        className={`cursor-pointer text-[25px] ${color}`}
      />

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
