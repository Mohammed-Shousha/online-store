import React from 'react'
import {Link} from 'react-router-dom'
import './OrderSummary.css'
import {Pro} from '../Database'


const OrderSummary =({cartItemsEntries})=>{
	
	const shippingFee = 100
	let subtotal = cartItemsEntries.reduce((t, i)=> t+ Number(Pro[i[0]].price)*i[1] ,0)
	let total = subtotal + shippingFee

	return(
		<div>
			<div className='order-summary'>
				<h1 className='tc'> Order Summary </h1>
				<hr/>
				<h3> Subtotal <span>{`${subtotal} EGP`}</span> </h3>
				<h3> Shipping <span>{`${shippingFee} EGP`}</span> </h3>
				<hr/>
				<h2> Total <span>{`${total} EGP`}</span> </h2>
				<Link to='/checkout'>
					<button className='checkout-botton'> CHECKOUT NOW </button>
				</Link>
			</div>
		</div>
	)
}

export default OrderSummary