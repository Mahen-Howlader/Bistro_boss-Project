import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";

function Main() {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes('register');

  return (
    <div className="container mx-auto">
      {noHeaderFooter || <Nav></Nav>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
}

export default Main;
