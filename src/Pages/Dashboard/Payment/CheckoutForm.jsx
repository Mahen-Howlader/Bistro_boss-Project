import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Providers/useAxiosSecure";
import useCart from "../../../Providers/useCart";
import UseAuth from "../../../Providers/Useauth";

function CheckoutForm() {
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const axiosSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
  const { user } = UseAuth();
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

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

    // payment confirm
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[error]", confirmError);
      // setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment
        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          cartId: cart?.map((item) => item?._id),
          menuItemId: cart?.map((item) => item?.menuID),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data);
        if(res?.data?.paymentResult?.insertedId){
          alert("Success message")
        }
      }
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
      {transactionId && (
        <p className="text-green-600">Your transactionId : {transactionId}</p>
      )}
    </div>
  );
}

export default CheckoutForm;
