import React, { Fragment, useContext } from 'react'
import CartItem from '../../Containers/CartItem/CartItem'
import OrderSummary from '../../Containers/OrderSummary/OrderSummary'
import Title from '../../Components/Title'
import FlexContainer from '../../Components/FlexContainer'
import { LinkButton } from '../../Components/Buttons'
import { CartButton } from '../../Components/CartComponents'
import Icon from '../../Components/Icon'
import { DataContext } from '../../Data/DataContext'
import { clearCart } from '../../Data/DataActions'
import emptyCart from '../../Data/Icons/empty-cart.svg'
import emptyCartButton from '../../Data/Icons/empty-cart-button.svg'


const Cart = () => {

	const { data, setData } = useContext(DataContext)
	const { cartItems } = data

	const handleClearCart = () => {
		setData(clearCart())
	}

	const cartItemsEntries = Object.entries(cartItems).filter(x => x[1] > 0)

	return (
		<Fragment>
			<Title h1> My Cart </Title>
			{cartItems.every(x => x === 0) ?
				<Fragment>
					<Icon src={emptyCart} alt='cart' />
					<h1> Your Cart Is Empty</h1>
					<p> What are you waiting for ? </p>
					<LinkButton to='/'>
						Start Shopping
					</LinkButton>
				</Fragment>
				:
				<FlexContainer around noAlign responsive>
					<div>
						{cartItemsEntries.map(x =>
							<CartItem
								key={x[0]}
								productId={x[0]}
								cartItems={cartItems}
							/>
						)}
					</div>
					<div>
						<OrderSummary
							cartItemsEntries={cartItemsEntries}
						/>
						<CartButton onClick={handleClearCart}>
							<p>Clear Cart</p>
							<img src={emptyCartButton} alt='empty-cart' />
						</CartButton>
					</div>
				</FlexContainer>
			}
		</Fragment>
	)
}

export default Cart