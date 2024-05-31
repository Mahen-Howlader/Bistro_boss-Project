import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./Useauth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/carts?email=${user?.email}`);
      console.log(data);
      return data;
    },
  });
  return [cart, refetch];
};
export default useCart;
