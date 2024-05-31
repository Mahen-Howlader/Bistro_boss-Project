import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Providers/Useauth";
import useAdmin from "../Providers/useAdmin";
function AdminRoute(children) {
    const {user,loading} =  UseAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation();
    if (loading || isAdminLoading) {
      return <h1>Loading</h1>;
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>;
}

export default AdminRoute;