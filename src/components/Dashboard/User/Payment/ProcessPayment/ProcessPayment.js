import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import DemoPayment from '../DemoPayment/DemoPayment';

const stripePromise = loadStripe('pk_test_51IhJdLD5qkOLllpH7WWYo29Hxnu3r43v8spD9JE48WKOJCXFfyWX11RTpkzJxXPl2HItm41sDd2FoUIwQSxTEfWa00eqx6VT6h');

const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
            
            <DemoPayment handlePaymentSuccess={handlePaymentSuccess}></DemoPayment>
    </Elements>
    );
};

export default ProcessPayment;