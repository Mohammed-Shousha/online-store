import React, {useContext} from 'react'
import {ProductsList} from '../Database'
import './CartItem.css'
import remove from '../Icons/delete.svg'
import {CartItemsContext} from '../../context/CartItemsContext'



const CartItem = ({ productId, editable=true})=>{
	const {cartItems, setCartItems} = useContext(CartItemsContext)

	return(
	<div className='cart-items-container'>
		<div className='item-container'>
			<img src={ProductsList[productId].photos[0]} alt='product'/>
			<div className='product-details'>
				<h2 > {ProductsList[productId].productName}</h2>
				<h3> {ProductsList[productId].price} EGP </h3>
				<p> {ProductsList[productId].description} </p>
			</div>
			<div className='product-action'>
				<h3 className='qty'>x{cartItems[productId]}</h3>
				<br/>
				{editable&&
					<img 
					 src={remove} alt='remove'
					 className='pointer' 
					 onClick={()=> setCartItems({type:'REMOVE_ITEM', payload:productId})}
					/>}
			 </div>
		</div>
	</div>
)
}

export default CartItem