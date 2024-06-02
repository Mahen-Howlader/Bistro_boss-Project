import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Providers/useAxiosSecure";
import useCart from "../../../Providers/useCart";

function CheckoutForm() {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);

//   useEffect(() => {
//     axiosSecure
//       .post("/create-payment-intent", { price: totalPrice })
//       .then((res) => {
//         setClientSecret(res.data.clientSecret);
//       });
//   }, [axiosSecure, totalPrice]);


//   console.log(clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    // each type of element.
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
  };

  return (
    <div className="px-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red">{error}</p>
    </div>
  );
}

export default CheckoutForm;
