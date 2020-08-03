const CartItemsReducer = (cartItems , action)=>{
	let newCartItems=[...cartItems]
	switch(action.type){
		case 'ADD_ITEM':
			newCartItems[action.payload]++
			return newCartItems
		case 'REMOVE_ITEM':
			newCartItems[action.payload]--
			return newCartItems
		default:
			return cartItems
	}
}

export default CartItemsReducer