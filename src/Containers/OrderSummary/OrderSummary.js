import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CartButton, OrderSummaryContainer } from '../../Components/CartComponents'
import Alert from '../../Components/Alert'
import { DataContext } from '../../Data/DataContext'
import { ProductsList } from '../../Data/Database'


const OrderSummary = ({ checkoutNow = true }) => {

	const { data } = useContext(DataContext)
	const { cartItems, confirmed } = data
	let history = useHistory()
	const [alert, setAlert] = useState(false)

	const shippingFee = 100
	let subtotal = cartItems.reduce((t, item) => t + Number(ProductsList.find(product => product.id === item.productId).price) * item.qty, 0)
	let total = subtotal + shippingFee


	const onCheckout = ()=>{
		if(confirmed){
			history.push('/checkout')
		}else{
			setAlert(true)
		}
	}
	return (
		<>
			<OrderSummaryContainer>
				<div>
					<h1 > Order Summary </h1>
					<hr />
					<h3> Subtotal <span>{`${subtotal} EGP`}</span> </h3>
					<h3> Shipping <span>{`${shippingFee} EGP`}</span> </h3>
					<hr />
					<h2> Total <span>{`${total} EGP`}</span> </h2>
					{checkoutNow &&
						<CartButton 
							checkout
							onClick={onCheckout}
						>
							CHECKOUT NOW
						</CartButton>
					}
				</div>
			</OrderSummaryContainer>
			{alert && <Alert setAlert={setAlert} confirm/>}
		</>
	)
}

export default OrderSummary