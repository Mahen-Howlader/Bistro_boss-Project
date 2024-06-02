import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Sectiontitle from "../../../Component/Sectiontitle/Sectiontitle";

// add key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
function Payment() {
  return (
    <div>
      <Sectiontitle
        heading="Payment"
        subHeading="Please pay to pay"
      ></Sectiontitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
}   

export default Payment;
