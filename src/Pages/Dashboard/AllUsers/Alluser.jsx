import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Providers/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import Swal from "sweetalert2";
function Alluser() {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  //   console.log(users);

  function userAdminHandel(user) {
    axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire("SweetAlert2 is working!");
        refetch()
      }
    });
  }

  function handelDelete(id) {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  }

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
            {users.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>
                   {item.role === "admin" ? "admin" :  <button onClick={() => userAdminHandel(item)}>
                      <FaPeopleLine />
                    </button>}
                  </td>
                  <td>
                    <button onClick={() => handelDelete(item._id)}>
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
