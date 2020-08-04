import React, {Fragment, useContext} from 'react'
import {Link} from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import {CartItemsContext} from '../../context/CartItemsContext'
import './Cart.css'
import emptyCart from '../../components/Icons/empty-cart.svg'


const Cart = ()=>{

	const {cartItems} = useContext(CartItemsContext)

	const cartItemsEntries = Object.entries(cartItems).filter(x=> x[1] > 0)

	return(
		<Fragment>
		<h1 className='cart-title'> My Cart </h1>
		{cartItems.every(x => x===0) ?
			<Fragment>
			<img src ={emptyCart} alt='cart' className='empty-cart-img'/>
			<h1> YOUR CART IS EMPTY</h1>
			<Link to='/'>
				<h3 
				 className='pointer hover-black-60 mb5'>
				 Continue Shopping?
				</h3> 
			</Link>
			</Fragment>
		:
			<div className='cart-container'>
				<div>
					{cartItemsEntries.map(x=> 
						<CartItem 
						 key={x[0]} 
						 productId={x[0]} 
						 cartItems={cartItems}
						/>
					)}
				</div>
				<OrderSummary 
				 cartItemsEntries={cartItemsEntries}
				/>
			</div>
		}
		</Fragment>
	)
}

export default Cart