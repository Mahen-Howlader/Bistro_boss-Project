import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UseAuth from "../../Providers/Useauth";

function Socialgooglelogin() {
  const { googleSignin } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  function handelGoogleLogin() {
    googleSignin().then((res) => {
      //   console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
    //   console.log(userInfo);
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  }

  return (
    <div>
      <div className="flex items-center justify-center  dark:bg-gray-800">
        <button
          onClick={handelGoogleLogin}
          className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        >
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Socialgooglelogin;
