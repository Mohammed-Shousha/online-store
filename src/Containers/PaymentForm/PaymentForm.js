import React, { useState, useEffect, useContext } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from '../../Components/Buttons'
import ErrorText from '../../Components/ErrorText'
import { StripeForm } from '../../Components/PaymentComponents'
import { DataContext } from '../../Data/DataContext'


const PaymentForm = () => {

    const { data } = useContext(DataContext)
    const { email } = data
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()

    const cardStyle = {
        style: {
            base: {
                color: "#000000",
                fontFamily: 'Courier, monospace',
                fontSmoothing: "antialiased",
                fontSize: '20px',
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    }

    const handleChange = async (e) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            receipt_email: email,
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`)
            setProcessing(false)
        } else {
            setError(null)
            setProcessing(false)
            setSucceeded(true)
        }
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8888/payment", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email
                })
            })
            const data = await response.json()
            setClientSecret(data.clientSecret)
            return data
        }
        fetchData()
    }, [email])

    return (
        <StripeForm onSubmit={handleSubmit}>
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
            <Button
                disabled={processing || disabled || succeeded}
            >
                Pay
            </Button>
            {error &&
                <ErrorText> {error} </ErrorText>
            }
            {/* Show a success message upon completion */}
            {succeeded &&
                <p>
                    Payment succeeded, see the result in your
                    <a href={`https://dashboard.stripe.com/test/payments`}>
                        {" "}
                        <strong>
                            Stripe dashboard.
                        </strong>
                    </a> 
                    Refresh the page to pay again.
                </p>
            }
        </StripeForm>
    )
}

export default PaymentForm