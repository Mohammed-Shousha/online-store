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
		</Fragment>
	)
}

export default Orders