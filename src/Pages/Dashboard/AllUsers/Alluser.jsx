import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Providers/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
function Alluser() {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);
  return (
    <div>
      <div className="flex justify-evenly mt-5">
        <h2>All User</h2>
        <h2>Total User</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item,index) => {
              return (
                <tr key={item._id}>
                  <th>{
                    index + 1
                    }</th>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>
                    <button>
                      <FaPeopleLine />
                    </button>
                  </td>
                  <td>
                    <button>
                      <MdDelete></MdDelete>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Alluser;
