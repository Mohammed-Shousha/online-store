import React from 'react'
import './CartItem.css'
import remove from '../Icons/delete.svg'
import {Pro} from '../Database'


const CartItem = ({ productId, cartItemsEntries, onRemovingItem})=>{
	return(
		<div className='mb4'>
			<div className='item-container'>
				<img src={Pro[productId].photos[0]} alt='product'/>
				<div className='product-details'>
					<h2 > {Pro[productId].productName}</h2>
					<h3> {Pro[productId].price} EGP </h3>
					<p> {Pro[productId].description} </p>
				</div>
				<div className='product-action'>
					<h3 className='qty'>x{cartItemsEntries[productId][1]}</h3>
					<br/>
					<img 
					 src={remove} alt='remove'
					 className='pointer' 
					 onClick={()=> onRemovingItem(productId)}/>
				 </div>
			</div>
		</div>
	)
}

export default CartItem