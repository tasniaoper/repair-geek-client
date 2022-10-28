import React, { useMemo, useState } from "react";
import './DemoPayment.scss';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";


const useOptions = () => {
  const fontSize = 16;
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const DemoPayment = ({handlePaymentSuccess}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] =useState(null);
  const [paymentSuccess, setPaymentSuccess ] =useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const {error , paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if(error){
        setPaymentError(error.message);
        setPaymentSuccess(null);
    }
    else{
        setPaymentSuccess(paymentMethod.id);
        //console.log("[PaymentMethod]", paymentMethod);
        setPaymentError(null);
        handlePaymentSuccess(paymentMethod.id);
    }
  };

  return (
      <div className="payment_container">
        <h2>Pay Now</h2>
    <form onSubmit={handleSubmit} className="payment_form">
      <label className="label">
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      
      <label className="label">
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label className="label">
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>

      <button className="payment_btn" type="submit" disabled={!stripe}>
        Pay
      </button>

    </form>
        {
          paymentError && <p className="text-danger pt-4">{paymentError}</p>
      }
        {
          paymentSuccess && <p className="text-success pt-4">Payment Successfull</p>
      }
    </div>
  );
};

export default DemoPayment;