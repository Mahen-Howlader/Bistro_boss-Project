import Swal from "sweetalert2";
import Sectiontitle from "../../../Component/Sectiontitle/Sectiontitle";
import Usemenu from "../../../Hooks/Usemenu";
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import useAxiosSecure from "../../../Providers/useAxiosSecure";
import { Link } from "react-router-dom";
function Manageitem() {
  const axiosSecure = useAxiosSecure();
  const [menu, ,refetch] = Usemenu();



  function handelDeleteMenu(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(id);
        const res = await axiosSecure.delete(`/menu/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount> 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch()
        }
      }
    });
  }

  return (
    <div>
      <Sectiontitle heading="Manage item" subHeading="Hurry Up"></Sectiontitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Job</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={val?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{val?.name}</td>
                  <td>{val?.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${val._id}`}>
                      <CiEdit />
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handelDeleteMenu(val._id)}>
                      <AiFillDelete />
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

export default Manageitem;
