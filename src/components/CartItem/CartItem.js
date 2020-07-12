import React from 'react'
import './CartItem.css'
import remove from '../Icons/delete.svg'
import {Pro} from '../Database'


const CartItem = ({ id, onRemovingItem})=>{
	return(
		<div className='mb4'>
			<div className='item-container'>
				<img src={Pro[id].photos[0]} alt='product'/>
				<div>
					<h2 > {Pro[id].productName}</h2>
					<h3> {Pro[id].price} EGP </h3>
					<p> {Pro[id].description} </p>
				</div>
				<img 
				 src={remove} alt='remove' 
				 className='remove' 
				 onClick={()=> onRemovingItem(id)}/>
			</div>
		</div>

	)
}

export default CartItem