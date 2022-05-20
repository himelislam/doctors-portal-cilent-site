import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import Loading from '../Shared/Loading';

const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {_id, price, patient, patientName} = appointment

    useEffect(()=> {
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({price})
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })
    },[price]);

    // if(processing){
    //     return <Loading></Loading>
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        
        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        });
        setProcessing(true);

        if(error){
            console.log(error);
            setCardError(error.message);
        }
        else{
            setCardError('')
        }

        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: patient
                },
              },
            },
          );
        if(intentError){
            setCardError(intentError?.message)
            setProcessing(false)
        }
        else{
            setCardError('');
            setSuccess('Your Payment Is Completed');
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);


            const payment = {
                appointment: _id,
                transactionId : paymentIntent.id,

            }
            // updating data to backend
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(payment)
            })
            .then(res=> res.json())
            .then(data => {
                setProcessing(false)
                console.log(data);
            })
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-xs btn-success' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-600'>{success}</p>
                    <p className='text-green-600'>Your Transection Id: <span className='text-orange-400'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;