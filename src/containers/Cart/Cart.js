import React, {Fragment, useContext} from 'react'
import {Link} from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import {DataContext} from '../../context/DataContext'
import './Cart.css'
import emptyCart from '../../components/Icons/empty-cart.svg'
import emptyCartButton from '../../components/Icons/empty-cart-button.svg'
import { clearCart } from '../../context/DataActions'


const Cart = ()=>{

	const{data, setData} = useContext(DataContext)
	const {cartItems} = data

	const handleClearCart =()=>{
		setData(clearCart())
	}

	const cartItemsEntries = Object.entries(cartItems).filter(x=> x[1] > 0)

	return(
		<Fragment>
		<h1 className='cart-title'> My Cart </h1>
		{cartItems.every(x => x===0) ?
			<Fragment>
			<img src ={emptyCart} alt='cart' className='empty-cart-img'/>
			<h1> Your Cart Is Empty</h1>
			<p> What are you waiting for ? </p>  
			<Link to='/'>
				<button className='start-shopping'>
					Start Shopping
				</button>
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
				<div>
					<OrderSummary 
					cartItemsEntries={cartItemsEntries}
					/>
					<button onClick={handleClearCart} className='clear-cart'>
						<p>Clear Cart</p>
						<img src={emptyCartButton} alt='empty-cart'/>
					</button>
				</div>
			</div>
		}
		</Fragment>
	)
}

export default Cart