import React, { useContext, useState } from 'react'
import CartItem from '../../Containers/CartItem/CartItem'
import OrderSummary from '../../Containers/OrderSummary/OrderSummary'
import Title from '../../Components/Title'
import FlexContainer from '../../Components/FlexContainer'
import { LinkButton } from '../../Components/Buttons'
import { CartButton } from '../../Components/CartComponents'
import Icon from '../../Components/Icon'
import { DataContext } from '../../Data/DataContext'
import { editCartItems } from '../../Data/DataActions'
import emptyCart from '../../Data/Icons/empty-cart.svg'
import emptyCartButton from '../../Data/Icons/empty-cart-button.svg'


const Cart = () => {

	const { data, setData } = useContext(DataContext)
	const { cartItems, email } = data
	const [isSubmitting, setIsSumbitting] = useState(false)

	const handleClearCart = async () => {
		setIsSumbitting(true)
		const response = await fetch('http://localhost:8888/clearcart', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email
			})
		})
		const { result, cartItems } = await response.json()
		if (result.nModified) {
			setData(editCartItems(cartItems))
			setIsSumbitting(false)
		}
	}

	return (
		<>
			<Title h1> My Cart </Title>
			{cartItems.every(item => item.qty === 0) ?
				<>
					<Icon src={emptyCart} alt='cart' />
					<h1> Your Cart Is Empty</h1>
					<p> What are you waiting for ? </p>
					<LinkButton to='/'>
						Start Shopping
					</LinkButton>
				</>
				:
				<FlexContainer around noAlign responsive>
					<div>
						{cartItems.map(({ productId }) =>
							<CartItem
								key={productId}
								productId={productId}
							/>
						)}
					</div>
					<div>
						<OrderSummary />
						<CartButton onClick={handleClearCart} disabled={isSubmitting}>
							<div>
								<p>Clear Cart</p>
								<img src={emptyCartButton} alt='empty-cart' />
							</div>
						</CartButton>
					</div>
				</FlexContainer>
			}
		</>
	)
}

export default Cart