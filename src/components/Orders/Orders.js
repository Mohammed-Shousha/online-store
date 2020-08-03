import React, {Fragment ,useContext} from 'react'
import {Link} from 'react-router-dom'
import SNav from '../SNav/SNav'
import CartItem from '../CartItem/CartItem'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import './Orders.css'
import {CartItemsContext} from '../../context/CartItemsContext'
import {OrdersContext} from '../../context/OrdersContext'


const Orders =()=>{

	const {cartItems} = useContext(CartItemsContext)
	const {orders} = useContext(OrdersContext)

	return(
		<Fragment>
		<SNav/>
		<h1 className='tl ml5'> Orders </h1>
		{!orders.length?
			<div>
				<h1> You don't have any orders yet</h1>
				{cartItems.every(x => x===0) ?
					<Link to='/'>
						<h3 className='pointer hover-black-60 mb5'>
						 Continue Shopping?
						</h3> 
					</Link>
				:
					<Link to='/checkout'>
						<h3 className='pointer hover-black-60 mb5'>
						 Checkout Now?
						</h3> 
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
		<Contact/>
		<Footer/>
		</Fragment>
	)
}

export default Orders