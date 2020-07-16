import React from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'
import SNav from '../../components/SNav/SNav'
import CartItem from '../../components/CartItem/CartItem'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Footer from '../../components/Footer/Footer'


const Cart = ({cartItems, onRemovingItem})=>{

	const cartItemsEntries = Object.entries(cartItems)

	return(
		<div>
			<SNav/>
			<h1 className='tl mt4 ml5'> My Cart </h1>
			{cartItems.every(x => x===0) ?
				<div>
					<h1> YOUR CART IS EMPTY</h1>
					<Link to=''>
						<p 
						 className='pointer hover-black-60 mb5'>
						 Continue Shopping?
						</p> 
					</Link>
				</div>
			:
				<div className='cart-container'>
					<div>
						{cartItemsEntries.filter(x=> x[1] > 0).map(x=> 
							<CartItem key={x[0]} productId={x[0]} 
							 onRemovingItem={onRemovingItem}
							 cartItemsEntries={cartItemsEntries}/>)}
					</div>
					<OrderSummary cartItemsEntries={cartItemsEntries}/>
				</div>
			}
			<Footer/>
		</div>
	)
}

export default Cart