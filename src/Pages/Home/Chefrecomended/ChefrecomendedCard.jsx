import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../Providers/Useauth";
import axios from "axios";
import useCart from "../../../Providers/useCart";

function ChefrecomendedCard({ data }) {
  const { _id, image, price, category, recipe, name } = data || {};
  const { user } = UseAuth();
  // console.log(user);
  const [,refetch] = useCart()
  const location = useLocation();
  const navigate = useNavigate();
  async function handelAddCart(item) {
    if (user && user.email) {
      console.log("mahin");
      const cartsInfo = {
        menuID: _id,
        email: user.email,
        name,
        image,
        price,
      };
      console.log(cartsInfo)
      axios.post("http://localhost:5000/carts", cartsInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not login?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  }
  return (
    <div>
      <div className="card card-compact border pt-3 bg-gray-200 bg-base-100 shadow-xl">
        <figure>
          <img className="rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handelAddCart(data)}
              className="btn bg-gray-400 border-b-4 border-b-black hover:bg-primary "
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefrecomendedCard;
