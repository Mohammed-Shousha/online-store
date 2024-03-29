import React, { useContext } from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { useMutation } from '@apollo/client'
import PaymentForm from '../../Containers/PaymentForm/PaymentForm'
import CartItem from '../../Containers/CartItem/CartItem'
import OrderSummary from '../../Containers/OrderSummary/OrderSummary'
import { CheckoutTitle } from '../../Components/Title'
import { Button } from '../../Components/Buttons'
import FlexContainer from '../../Components/FlexContainer'
import { PaymentButton, PaymentContainer } from '../../Components/PaymentComponents'
import { DataContext } from '../../Data/DataContext'
import { editCartItems, editOrders } from '../../Data/DataActions'
import { HANDLE_ADDING_ORDER } from '../../Data/Mutations'
import money from '../../Data/Icons/cash.svg'
import greenMoney from '../../Data/Icons/cash-green.svg'
import credit from '../../Data/Icons/credit.svg'
import greenCredit from '../../Data/Icons/credit-green.svg'


const promise = loadStripe(process.env.REACT_APP_STRIPE_API)

const Payment = ({ cash, setCash, handleNext }) => {

   const { data, setData } = useContext(DataContext)
   const { cartItems } = data

   const [handleAddingOrder] = useMutation(HANDLE_ADDING_ORDER, {
      onCompleted({ handleAddingOrder }) {
         const { result, orders, cartItems } = handleAddingOrder
         if (result) { // 1 "Success" || 0 "Failed"
            setData(editOrders(orders))
            setData(editCartItems(cartItems))
            handleNext()
         }
      }
   })

   // const placeOrder = () => {
      // const response = await fetch('http://localhost:8888/addorder', {
      // 	method: 'put',
      // 	headers: { 'Content-Type': 'application/json' },
      // 	body: JSON.stringify({
      // 		email
      // 	})
      // })
      // const { result, orders } = await response.json()
      // if (result.nModified) {
      // 	setData(editOrders(orders))
      // 	handleNext()
      // }
   // }

   return (
      <>
         <CheckoutTitle h1> Payment</CheckoutTitle>

         <CheckoutTitle h2> Payment Method </CheckoutTitle>
         <FlexContainer center>
            <PaymentButton
               active={!cash}
               onClick={() => setCash(false)}
            >
               <img src={cash ? credit : greenCredit} alt='credit' />
               <p> Pay with Card </p>
            </PaymentButton>

            <PaymentButton
               active={cash}
               onClick={() => setCash(true)}
            >
               <img src={cash ? greenMoney : money} alt='money' />
               <p> Pay with Cash </p>
            </PaymentButton>
         </FlexContainer>
         <FlexContainer center>
            {cash ?
               <PaymentContainer>
                  <p>Please note there is a non-refundable fee of 10.00 EGP for our cash on delivery service. </p>
                  <p>To save this amount, {""}
                     <strong onClick={() => setCash(false)}>
                        please proceed with debit/credit card.
                     </strong>
                  </p>
                  <Button onClick={handleAddingOrder}>
                     Place Order
                  </Button>
               </PaymentContainer>
               :
               <PaymentContainer>
                  <Elements stripe={promise}>
                     <PaymentForm
                        placeOrder={handleAddingOrder}
                     />
                  </Elements>
               </PaymentContainer>
            }
         </FlexContainer>

         <CheckoutTitle h2> Your Order </CheckoutTitle>
         <FlexContainer around noAlign responsive>
            <div>
               {cartItems.map(({ productId }) =>
                  <CartItem
                     key={productId}
                     productId={productId}
                     editable={false}
                     checkout={true}
                  />
               )}
            </div>
            <OrderSummary
               checkoutNow={false}
            />
         </FlexContainer>
      </>
   )
}

export default Payment