import React, { createContext, useState } from "react"
import {ProductsList} from '../components/Database'

export const CartItemsContext = createContext()

export const CartItemsProvider =({children})=>{

	const nProducts = ProductsList.length
	const [cartItems, setCartItems] = useState(Array(nProducts).fill(0))

	const onAddingItem =(productId)=>{
		let newCartItems=[...cartItems]
		newCartItems[productId]++
		setCartItems(newCartItems)	
	}

	const onRemovingItem =(productId)=>{
		let newCartItems=[...cartItems]
		newCartItems[productId]--
		setCartItems(newCartItems)
	}

	return(
		<CartItemsContext.Provider value={{cartItems, setCartItems, onAddingItem, onRemovingItem, nProducts}}>
			{children}
		</CartItemsContext.Provider>
	)
}