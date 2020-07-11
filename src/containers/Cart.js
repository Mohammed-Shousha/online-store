import React from 'react'
import {Link} from 'react-router-dom'
import SNav from '../components/SNav/SNav'
import CartItem from '../components/CartItem/CartItem'


const Cart = ({cartItems, onRemovingItem})=>{
	return(
		<div>
			<SNav/>
			<h1 className='tl mt4 ml5'> My Cart </h1>
			{!cartItems.length ?
				<div>
					<h1> YOUR CART IS EMPTY</h1>
					<Link to=''>
						<p 
						 className='pointer hover-black-60'>
						 Continue Shopping?
						</p> 
					</Link>
				</div>
			:cartItems.map(x=> <CartItem key={x} id={x} onRemovingItem={onRemovingItem}/>)}
		</div>
	)
}

export default Cart