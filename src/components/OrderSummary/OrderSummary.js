import React from 'react'
import { Link } from 'react-router-dom'
import { ProductsList } from '../Database'
import { CartButton, OrderSummaryContainer } from '../StyledComponents/CartComponents'


const OrderSummary = ({ cartItemsEntries, checkoutNow = true }) => {

	const shippingFee = 100
	let subtotal = cartItemsEntries.reduce((t, i) => t + Number(ProductsList[i[0]].price) * i[1], 0)
	let total = subtotal + shippingFee

	return (
		<OrderSummaryContainer>
			<div>
				<h1 > Order Summary </h1>
				<hr />
				<h3> Subtotal <span>{`${subtotal} EGP`}</span> </h3>
				<h3> Shipping <span>{`${shippingFee} EGP`}</span> </h3>
				<hr />
				<h2> Total <span>{`${total} EGP`}</span> </h2>
				{checkoutNow &&
					<Link to='/checkout'>
						<CartButton checkout> CHECKOUT NOW </CartButton>
					</Link>
				}
			</div>
		</OrderSummaryContainer>
	)
}

export default OrderSummary