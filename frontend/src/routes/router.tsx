import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Zone from "@/pages/Zone";
import Book from "@/pages/Book";
import Practice from "@/pages/Practice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "zone/:id", element: <Zone /> },
      { path: "book", element: <Book /> },
      { path: "practice", element: <Practice /> },
    ],
  },
]);

export default router;
