import React, { useState, useEffect, useContext, useLayoutEffect } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from '../../Components/Buttons'
import ErrorText from '../../Components/ErrorText'
import { StripeForm } from '../../Components/PaymentComponents'
import { DataContext } from '../../Data/DataContext'


const PaymentForm = ({ placeOrder }) => {

   const { data } = useContext(DataContext)
   const { email } = data
   const [succeeded, setSucceeded] = useState(false)
   const [error, setError] = useState(null)
   const [processing, setProcessing] = useState('')
   const [disabled, setDisabled] = useState(true)
   const [clientSecret, setClientSecret] = useState('')
   const [fontSize, setFontSize] = useState(16)
   const stripe = useStripe()
   const elements = useElements()

   const cardStyle = {
      style: {
         base: {
            color: "#000000",
            fontFamily: 'Courier, monospace',
            fontSmoothing: "antialiased",
            fontSize: `${fontSize}px`,
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
         placeOrder()
      }
   }

   useEffect(() => {
      async function fetchData() {
         const response = await fetch("https://online-store-apollo-server.herokuapp.com/payment", {
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

   useLayoutEffect(() => {
      const updateFontSize = () => {
         let width = window.innerWidth
         if (width < 480) {
            setFontSize(16)
         } else {
            setFontSize(20)
         }
         if (width > 1200) {
            setFontSize(23)
         }
      }
      window.addEventListener('resize', updateFontSize)
      updateFontSize()
      return () => window.removeEventListener('resize', updateFontSize)
   }, [])

   return (
      <StripeForm onSubmit={handleSubmit}>
         <CardElement options={cardStyle} onChange={handleChange} />
         <Button
            disabled={processing || disabled || succeeded}
         >
            Place Order
         </Button>
         {error &&
            <ErrorText> {error} </ErrorText>
         }
      </StripeForm>
   )
}

export default PaymentForm