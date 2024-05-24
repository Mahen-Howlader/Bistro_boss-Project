import Swal from "sweetalert2";
import useCart from "../../Providers/useCart";
import useAxiosSecure from "../../Providers/useAxiosSecure";

function Cart() {
  const [cart,refetch] = useCart();
  // console.log(cart);
  const total = cart.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosSecure();
  function handelTodoDelete(id) {
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
        axiosSecure.delete(`/cart${id}`).then((res) => {
          if(res.data.deletedCount){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });

      }
    });
  }

  return (
    <div className="bg-teal-500">
      <div className="flex py-3 px-2 justify-between">
        <h3 className="text-xl">Total order : {cart.length}</h3>
        <h3 className="text-xl">Total price: {total}</h3>
        <button className="btn">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-300 ">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((val, index) => {
                // console.log(val);
                return (
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
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <th>
                      <button
                        onClick={() => handelTodoDelete(val._id)}
                        className="btn  btn-xs"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
            {/* foot */}
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
