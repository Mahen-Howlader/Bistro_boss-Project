import {useQuery } from "@tanstack/react-query";
import UseAuth from "./Useauth";
import useAxiosSecure from "./useAxiosSecure";

function useAdmin() {
    const {user} = UseAuth();
    const axiosSequre = useAxiosSecure()
    const {data : isAdmin, isPending : isAdminLoading} = useQuery({
        queryKey : [user?.email, "isAdmin"],
        queryFn : async () => {
            const res = await axiosSequre(`/users/admin/${user?.email}`);
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
}

export default useAdmin;