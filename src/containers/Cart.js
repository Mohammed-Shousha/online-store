import React from 'react';
import SNav from '../components/SNav/SNav';
import CartItem from '../components/CartItem/CartItem';

const Cart = ({cartItems, onRouteChange, onRemovingItem})=>{
	return(
		<div>
			<SNav/>
			<h1 className='tl mt4 ml5'> My Cart </h1>
			{!cartItems.length ?
				<div>
					<h1> YOUR CART IS EMPTY</h1>
					<p 
					 onClick={()=>onRouteChange('home')} 
					 className='pointer hover-black-60'>
					 Continue Shopping?
					</p> 
				</div>
			:cartItems.map(x=> <CartItem id={x} key={x} onRemovingItem={onRemovingItem}/>)}
		</div>
	)
}

export default Cart