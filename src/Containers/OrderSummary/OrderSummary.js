import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartButton, OrderSummaryContainer } from '../../Components/CartComponents'
import { DataContext } from '../../Data/DataContext'
import { ProductsList } from '../../Data/Database'


const OrderSummary = ({ checkoutNow = true }) => {

	const { data } = useContext(DataContext)
	const { cartItems } = data

	const shippingFee = 100
	let subtotal = cartItems.reduce((t, item) => t + Number(ProductsList.find(product => product.id === item.productId).price) * item.qty, 0)
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