import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROOT } from "./router/index.jsx";

const router = createBrowserRouter(ROOT);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
