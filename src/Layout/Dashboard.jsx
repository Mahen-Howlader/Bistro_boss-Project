import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Providers/useAdmin";
import useCart from "../Providers/useCart";

function Dashboard() {
  const [isAdmin] = useAdmin();
  const [cart] = useCart()
  // const
  return (
    <div className="flex  container mx-auto">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu space-y-5">
          {/* all user  */}
          <>
            {" "}
            <li>
              <NavLink to="/dashboard/adminhome">User Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/additem">Add Item</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">MY Cart {cart.length}</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">Payment History</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageItme">Manage Item</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/booking">Manage Booking</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allusers">All User</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymenthistory">Payment Real History</NavLink>
            </li>
          </>

          <>
            <div className="divider"></div>
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/shope">Shope</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/contact">Contact</NavLink>
                </li>
              </>
            )}
          </>

          {/* admin  */}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
