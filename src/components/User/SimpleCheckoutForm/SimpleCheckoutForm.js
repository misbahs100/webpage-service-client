import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';

const SimpleCheckoutForm = ({ service }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        console.log(paymentMethod);
        // error and success handling
        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
        }

        const order = {
            userName: loggedInUser.name,
            email: loggedInUser.email,
            userPostalCode: paymentMethod.billing_details.address.postal_code,
            cardLast4: paymentMethod.card.last4,
            serviceName: service.name,
            servicePrice: service.price,
            serviceImage: service.imageURL,
            serviceDescription: service.description,
            orderTime: new Date().toDateString()

        }

        fetch('https://agile-earth-23831.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => {
                alert('Service ordered Successfully.');
            })

    };

    return (
        <div className="row d-flex container mt-5">
            <div className="col-md-5">
                <h5>Payment through your card</h5><br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="" className="">Put your card details below:</label>
                        <CardElement className="form-control" /><br />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className=""><p className="">Your service will cost {service.price}</p></div>
                        <div><button type="submit" disabled={!stripe} className="btn btn-warning">Pay</button></div>
                    </div>
                </form>
                
                {
                    paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
                }
                {
                    paymentSuccess && <p style={{ color: 'green' }}>Your payment is successfull.</p>
                }
            </div>
        </div>
    );
};

export default SimpleCheckoutForm;