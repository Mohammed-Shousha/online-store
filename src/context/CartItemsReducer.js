import {ProductsList} from '../components/Database'

const CartItemsReducer = (cartItems , action)=>{
	let newCartItems=[...cartItems]
	switch(action.type){
		case 'ADD_ITEM':
			newCartItems[action.payload]++
			return newCartItems
		case 'REMOVE_ITEM':
			newCartItems[action.payload]--
			return newCartItems
		case 'RESET':
			return Array(ProductsList.length).fill(0)
		default:
			return cartItems
	}
}

export default CartItemsReducer