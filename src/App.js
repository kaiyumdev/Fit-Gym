import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Services from "./Pages/Services/Services";
import Registration from "./Pages/Registration/Registration";
import Service from "./Pages/Service/Service";
import NotFound from "./Pages/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import CheckOut from "./Pages/CheckOut/CheckOut";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Slide from "./Pages/Slide/Slide";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/services", element: <Services></Services> },
        { path: "/service", element: <Service></Service> },
        { path: "/banner", element: <Slide></Slide> },
        {
          path: "/service/:checkOutId",
          element: (
            <PrivateRoute>
              <CheckOut></CheckOut>
            </PrivateRoute>
          ),
        },
        { path: "/login", element: <Login></Login> },
        { path: "/registration", element: <Registration></Registration> },
        { path: "/blogs", element: <Blogs></Blogs> },
        { path: "/about", element: <About></About> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
