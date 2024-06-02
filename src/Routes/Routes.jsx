import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Ourmenu from "../Pages/Ourmenu/Ourmenu";
import Ourshope from "../Pages/OurShope/Ourshope";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Privateroute from "./Privateroute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import Alluser from "../Pages/Dashboard/AllUsers/Alluser";
import Adminhome from "../Pages/Dashboard/Admin home/Adminhome";
import Additem from "../Pages/Dashboard/Additem/Additem";
import AdminRoute from "./AdminRoute";
import Manageitem from "../Pages/Dashboard/ManageItem/Manageitem";
import Updateitem from "../Pages/Dashboard/UpdateItem/Updateitem";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourmenu",
        element: <Ourmenu></Ourmenu>,
      },
      {
        path: "/ourshope",
        element: (
          <Privateroute>
            {" "}
            <Ourshope></Ourshope>
          </Privateroute>
        ),
      },
      {
        path: "/ourshope/:category",
        element: (
          <Privateroute>
            {" "}
            <Ourshope></Ourshope>
          </Privateroute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin
      {
        path: "updateItem/:id",
        element: <Updateitem></Updateitem>,
        loader : ({params}) =>  fetch(`http://localhost:5000/menu/${params?.id}`)
      },
      {
        path: "allusers",
        element: <Alluser></Alluser>,
      },
      {
        path: "additem",
        element: <AdminRoute>
          <Additem></Additem>
        </AdminRoute>,
      },
      {
        path: "manageItme",
        element: <Manageitem></Manageitem>
        
      },
      { 
        path: "payment",
        element: <Payment></Payment>
        
      },
      {
        path: "cart",
        element: (
          <Privateroute>
            <Cart></Cart>
          </Privateroute>
        ),
      },
      {
        path: "adminhome",
        element: (
          <Privateroute>
            <Adminhome></Adminhome>
          </Privateroute>
        ),
      },
    ],
  },
]);
