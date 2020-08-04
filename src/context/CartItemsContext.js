import React, { createContext, useReducer } from "react"
import {ProductsList} from '../components/Database'
import CartItemsReducer from './CartItemsReducer'

export const CartItemsContext = createContext()

export const CartItemsProvider =({children})=>{

	const nProducts = ProductsList.length
	const [cartItems, setCartItems] = useReducer(CartItemsReducer, Array(nProducts).fill(0))

	return(
		<CartItemsContext.Provider value={{cartItems, setCartItems, nProducts}}>
			{children}
		</CartItemsContext.Provider>
	)
}