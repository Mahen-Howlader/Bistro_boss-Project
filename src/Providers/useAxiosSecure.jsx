import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./Useauth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
function useAxiosSecure() {
  const { logOut } = UseAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      // console.log("requst by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
   async function (error) {
      // console.log("status error in the interce", error);
      const status = error.response.status;
      console.log("status error in the enterceptor", status)
      if (status === 401 || status === 403) {
       await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
}

export default useAxiosSecure;
