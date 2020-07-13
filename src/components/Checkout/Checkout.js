import React from 'react'
import './Checkout.css'
import {Pro} from '../Database'


const Checkout =({cartItemsEntries})=>{
	
	const shippingFee = 100
	let subtotal = cartItemsEntries.reduce((t, i)=> t+ Number(Pro[i[0]].price)*i[1] ,0)
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