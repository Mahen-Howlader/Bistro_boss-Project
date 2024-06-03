import { useQueries, useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Providers/Useauth";
import useAxiosSecure from "../../../Providers/useAxiosSecure";

function PaymentHistory() {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const { data: payments } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
    enabled : !!user?.email
  });

  console.log(payments);
  return <div>Payment {payments?.length}</div>;
}

export default PaymentHistory;
