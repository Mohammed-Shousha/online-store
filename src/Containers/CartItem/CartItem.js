import React, { useContext, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { CartItemsContainer, ProductDetails, ProductActions } from '../../Components/CartComponents'
import FlexContainer from '../../Components/FlexContainer'
import { DataContext } from '../../Data/DataContext'
import { editCartItems } from '../../Data/DataActions'
import { PRODUCT_BY_ID } from '../../Data/Queries'
import { HANDLE_REMOVING_ITEMS } from '../../Data/Mutations'
import bin from '../../Data/Icons/bin.svg'
import greyBin from '../../Data/Icons/greyBin.svg'


const CartItem = ({ productId, editable = true, order, checkout = false }) => {

   const { data, setData } = useContext(DataContext)
   const { email, cartItems } = data
   const [isSubmitting, setIsSumbitting] = useState(null)
   const [product, setProduct] = useState({})

   const [handleRemovingItems] = useMutation(HANDLE_REMOVING_ITEMS, {
      onCompleted({ handleRemovingItems }) {
         if (handleRemovingItems.result) {
            setData(editCartItems(handleRemovingItems.cartItems))
            setIsSumbitting(false)
         }
      }
   })


   const onRemovingItem = async (productId) => {
      setIsSumbitting(productId)
      handleRemovingItems({ variables: { email, productId } })
      // const response = await fetch('http://localhost:8888/removeitem', {
      // 	method: 'put',
      // 	headers: { 'Content-Type': 'application/json' },
      // 	body: JSON.stringify({
      // 		email,
      // 		productId
      // 	})
      // })
      // const { result, cartItems } = await response.json()
      // if (result.nModified) {
      // 	setData(editCartItems(cartItems))
      // 	setIsSumbitting(null)
      // }
   }

   useQuery(PRODUCT_BY_ID,
      {
         variables: { id: productId },
         onCompleted({ productById }) {
            setProduct(productById)
         }
      }
   )

   let qty = 0
   if (order) {
      qty = order.find(item => item.productId === productId).qty
   } else {
      qty = cartItems.find(item => item.productId === productId).qty
   }

   // useEffect(() => {
   //    // productById({ variables: { id: productId } })
   //    getProduct(productId)
   // })


   return (
      <CartItemsContainer checkout={checkout}>
         <div>
            <FlexContainer noAlign >
               <img src={product.photo} alt={product.name} />
               <ProductDetails>
                  <h2> {product.name}</h2>
                  <h3> {product.price} EGP </h3>
                  <p> {product.description} </p>
               </ProductDetails>
            </FlexContainer>
            <ProductActions>
               <h3>x{qty}</h3>
               <br />
               {editable &&
                  <img
                     src={isSubmitting !== productId ? bin : greyBin} alt='bin'
                     onClick={() => isSubmitting !== productId && onRemovingItem(productId)}
                  />
               }
            </ProductActions>
         </div>
      </CartItemsContainer>
   )
}

export default CartItem