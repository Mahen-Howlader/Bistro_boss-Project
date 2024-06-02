import Swal from "sweetalert2";
import useCart from "../../Providers/useCart";
import useAxiosSecure from "../../Providers/useAxiosSecure";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, refetch] = useCart();
  const total = cart?.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosSecure();
  function handleTodoDelete(id) {
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
        axiosSecure.delete(`/cart/${id}`).then((res) => {
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
  // console.log(cart);
  return (
    <div className="bg-teal-500">
      <div className="flex py-3 px-2 justify-between">
        <h3 className="text-xl">Total order : {cart?.length || 0}</h3>
        <h3 className="text-xl">Total price: {total || 0}</h3>
        {cart?.length ? (
          <Link to="/dashboard/payment">
            <button >Pay</button>
          </Link>
        ) : (
          <button disabled>Pay</button>
        )}
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-gray-300">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((val, index) => (
                <tr key={val._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={val.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{val.name}</div>
                        <div className="text-sm opacity-50">
                          {val.location || "Unknown"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{val.name}</td>
                  <td>{val.price}</td>
                  <th>
                    <button
                      onClick={() => handleTodoDelete(val._id)}
                      className="btn btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
