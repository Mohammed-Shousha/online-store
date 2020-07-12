import React from 'react'
import './Checkout.css'
import {Pro} from '../Database'


const Checkout =({cartItems})=>{
	const shippingFee = 100
	let subtotal = cartItems.reduce((t, id)=> t+ Number(Pro[id].price),0)
	let total = subtotal + shippingFee

	return(
		<div>
			<div className='checkout '>
				<h1 className='tc'> Order Summary </h1>
				<hr/>
				<h3> Subtotal <span>{`${subtotal} EGP`}</span> </h3>
				<h3> Shipping <span>{`${shippingFee} EGP`}</span> </h3>
				<hr/>
				<h2> Total <span>{`${total} EGP`}</span> </h2>
				<button className='checkout-botton'> CHECKOUT NOW </button>
			</div>
		</div>
	)
}

export default Checkout