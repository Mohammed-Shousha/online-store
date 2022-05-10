import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CartButton, OrderSummaryContainer } from '../../Components/CartComponents'
import Alert from '../../Components/Alert'
import { DataContext } from '../../Data/DataContext'
import { PRODUCTS } from '../../Data/Queries'
import Loading from '../../Components/Loading'


const OrderSummary = ({ checkoutNow = true }) => {

   const { data } = useContext(DataContext)
   const { cartItems, confirmed, orders } = data

   let navigate = useNavigate()

   const [alert, setAlert] = useState(false)
   const [products, setProducts] = useState(null)
   const [subtotal, setSubtotal] = useState(0)

   const shippingFee = 100
   let total = subtotal + shippingFee

   const { loading } = useQuery(PRODUCTS, {
      onCompleted({ products }) {
         setProducts(products)
      }
   })

   const onCheckout = () => {
      if (confirmed) {
         navigate('/checkout')
      } else {
         setAlert(true)
      }
   }


   useEffect(() => {

      const calculateSubtotal = (arr) => {
         const sum = arr.reduce((t, item) => t + Number(products.find(product => product._id === item.productId).price) * item.qty, 0)
         return sum
      }

      if (products) {
         if (cartItems.length) {
            setSubtotal(calculateSubtotal(cartItems))
         } else {
            const lastOrder = orders[orders.length - 1].order
            setSubtotal(calculateSubtotal(lastOrder))
         }
      }
   }, [products, cartItems, orders])


   return (
      loading ?
         <Loading small /> :
         <>
            <OrderSummaryContainer>
               <div>
                  <h1 > Order Summary </h1>
                  <hr />
                  <h3> Subtotal <span>{`${subtotal} EGP`}</span> </h3>
                  <h3> Shipping <span>{`${shippingFee} EGP`}</span> </h3>
                  <hr />
                  <h2> Total <span>{`${total} EGP`}</span> </h2>
                  {checkoutNow &&
                     <CartButton
                        checkout
                        onClick={onCheckout}
                     >
                        CHECKOUT NOW
                     </CartButton>
                  }
               </div>
            </OrderSummaryContainer>
            {alert && <Alert setAlert={setAlert} confirm />}
         </>
   )
}

export default OrderSummary