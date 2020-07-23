import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import Footer from '../Footer/Footer'
import './Orders.css'


const Orders =({orders, cartItems})=>(
	<Fragment>
	<h1 className='orders-title'> Orders </h1>
	{!orders.length?
		<div>
			<h2> You don't have any orders yet</h2>
			{cartItems.every(x => x===0) ?
				<Link to='/'>
					<p className='pointer hover-black-60 mb5'>
					 Continue Shopping?
					</p> 
				</Link>
			:
				<Link to='/checkout'>
					<p className='pointer hover-black-60 mb5'>
					 Checkout Now?
					</p> 
				</Link>
			}
		</div>
	:
		<div>
			{orders.map((order, i)=>(
				<Fragment key={i}>
				<h2>Order Time: {order[2]}</h2>
				{order[0].map(x=>
					<CartItem key={x[0]} productId={x[0]} 
				 	 editable={false}
				 	 cartItems={order[1]}
					 />)}
				</Fragment>
			))}
		</div>
	}
	<Footer/>
	</Fragment>
)

export default Orders