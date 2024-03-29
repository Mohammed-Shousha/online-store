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
   const { cartItems } = data
   const [disabled, setDisabled] = useState(null)
   const [product, setProduct] = useState({})

   let qty = 0

   if (order) {
      qty = order.find(item => item.productId === productId).qty
   } else {
      qty = cartItems.find(item => item.productId === productId).qty
   }


   const [handleRemovingItems] = useMutation(HANDLE_REMOVING_ITEMS, {
      onCompleted({ handleRemovingItems }) {
         const { result, cartItems } = handleRemovingItems
         if (result) {  // 1 "Success" || 0 "Failed"
            setData(editCartItems(cartItems))
            setDisabled(false)
         }
      }
   })


   const onRemovingItem = (productId) => {
      setDisabled(productId)
      handleRemovingItems({ variables: { productId } })
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
      // 	setDisabled(null)
      // }
   }

   useQuery(PRODUCT_BY_ID,
      {
         variables: { id: productId },
         onCompleted({ productById }) { //product
            setProduct(productById)
         }
      }
   )



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
                     src={disabled !== productId ? bin : greyBin} alt='bin'
                     onClick={() => disabled !== productId && onRemovingItem(productId)}
                  />
               }
            </ProductActions>
         </div>
      </CartItemsContainer>
   )
}

export default CartItem