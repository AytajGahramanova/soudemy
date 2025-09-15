import Root from "../pages/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import ShopDetail from "../pages/ShopDetail/ShopDetail";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/BlogDetail/BlogDetail";
import Contact from "../pages/Contact/Contact";

export const ROOT = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "/shop-detail/:id",
        element: <ShopDetail />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "/blog-detail/:id",
        element: <BlogDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];
