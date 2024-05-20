import { Navigate, useLocation } from "react-router-dom";
import Useprovider from "../Providers/Useprovider";

function Privateroute({ children }) {
  const { user, loading } = Useprovider();
  const location = useLocation();
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>;
}

export default Privateroute;
