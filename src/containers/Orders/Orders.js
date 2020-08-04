import React, {Fragment ,useContext} from 'react'
import {Link} from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import {CartItemsContext} from '../../context/CartItemsContext'
import {OrdersContext} from '../../context/OrdersContext'
import './Orders.css'
import box from '../../components/Icons/box.svg'


const Orders =()=>{

	const {cartItems} = useContext(CartItemsContext)
	const {orders} = useContext(OrdersContext)

	return(
		<Fragment>
		<h1 className='orders-title'> Orders </h1>
		{!orders.length?
			<div>
				<img src={box} alt='box' className='box-img'/>
				<h1> You Don't Have Any Orders Yet</h1>
				{cartItems.every(x => x===0) ?
					<Fragment>
					<p> What are you waiting for ? </p> 
					<Link to='/'>
						<button className='continue-shopping'>
							Continue Shopping
						</button>
					</Link>
					</Fragment>
				:
					<Fragment>
					<p>But there is some items in your cart </p>
					<Link to='/checkout'>
						<button className='continue-shopping'>
							Checkout Now
						</button> 
					</Link>
					</Fragment>
				}
			</div>
		:
			<div>
				{orders.map((order, i)=>(
					<Fragment key={i}>
					<h2>Order Time: {order[2]}</h2>
					{order[0].map(x=>
						<CartItem 
						 key={x[0]} productId={x[0]} 
					 	 editable={false}
					 	 cartItems={order[1]}
						 />)}
					</Fragment>
				))}
			</div>
		}
		</Fragment>
	)
}

export default Orders