import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex  container mx-auto">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu space-y-5">
          {/* all user  */}
          <li>
            <NavLink to="/dashboard/userhome">User Home</NavLink>
        
          </li>
          <li>
            <NavLink to="/dashboard/vation">ReserVation</NavLink>
        
          </li>
          <li>
            <NavLink to="/dashboard/payment">Payment History</NavLink>
        
          </li>
          <li>
            <NavLink to="/dashboard/mycart">My Cart</NavLink>
        
          </li>
          <li>
            <NavLink to="/dashboard/addreview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">My Booking</NavLink>
          </li>

      {/* admin  */}

          <div className="divider"></div>
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
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
