import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'
import SNav from '../../components/SNav/SNav'
import CartItem from '../../components/CartItem/CartItem'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Footer from '../../components/Footer/Footer'


const Cart = ({cartItems, onRemovingItem})=>{

	const cartItemsEntries = Object.entries(cartItems).filter(x=> x[1] > 0)

	return(
		<Fragment>
		<SNav/>
		<h1 className='tl mt4 ml5'> My Cart </h1>
		{cartItems.every(x => x===0) ?
			<Fragment>
				<h1> YOUR CART IS EMPTY</h1>
				<Link to=''>
					<p 
					 className='pointer hover-black-60 mb5'>
					 Continue Shopping?
					</p> 
				</Link>
			</Fragment>
		:
			<div className='cart-container'>
				<div>
					{cartItemsEntries.map(x=> 
						<CartItem key={x[0]} productId={x[0]} 
						 onRemovingItem={onRemovingItem}
						 cartItems={cartItems}
						/>
					)}
				</div>
				<OrderSummary 
				 cartItemsEntries={cartItemsEntries}
				/>
			</div>
		}
		<Footer/>
		</Fragment>
	)
}

export default Cart