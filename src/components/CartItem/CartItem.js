import React from 'react'
import './CartItem.css'
import remove from '../Icons/delete.svg'
import {ProductsList} from '../Database'


const CartItem = ({ productId, cartItems, onRemovingItem, editable=true})=>(
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
					 onClick={()=> onRemovingItem(productId)}
					/>}
			 </div>
		</div>
	</div>
)

export default CartItem