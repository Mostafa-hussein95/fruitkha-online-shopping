import { createBrowserRouter } from "react-router";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import News from "./Pages/News";
import Shop from "./Pages/Shop";
import Notfound from "./Pages/Notfound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SingleProduct from "./Pages/SingleProduct";
import SingleNews from './Pages/SingleNews';
import CheckOut from './Pages/CheckOut';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "news", element: <News /> },
      { path: "shop", element: <Shop /> },
      { path: "singleproduct/:id", element: <SingleProduct /> },
      { path: "singlenews/:id", element: <SingleNews /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default router;
