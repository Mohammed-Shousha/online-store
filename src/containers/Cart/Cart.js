import React, {Fragment, useContext} from 'react'
import CartItem from '../../components/CartItem/CartItem'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import {DataContext} from '../../context/DataContext'
import emptyCart from '../../components/Icons/empty-cart.svg'
import emptyCartButton from '../../components/Icons/empty-cart-button.svg'
import { clearCart } from '../../context/DataActions'
import Title from '../../components/StyledComponents/Title'
import FlexContainer from '../../components/StyledComponents/FlexContainer'
import LinkButton from '../../components/StyledComponents/LinkButton'
import Icon from '../../components/StyledComponents/Icon'
import {CartButton} from '../../components/StyledComponents/CartComponents'


const Cart = ()=>{

	const{data, setData} = useContext(DataContext)
	const {cartItems} = data

	const handleClearCart =()=>{
		setData(clearCart())
	}

	const cartItemsEntries = Object.entries(cartItems).filter(x=> x[1] > 0)

	return(
		<Fragment>
		<Title> My Cart </Title>
		{cartItems.every(x => x===0) ?
			<Fragment>
			<Icon src ={emptyCart} alt='cart'/>
			<h1> Your Cart Is Empty</h1>
			<p> What are you waiting for ? </p>  
			<LinkButton to='/'>
				Start Shopping
			</LinkButton>
			</Fragment>
		:
			<FlexContainer around responsive>
				<div>
					{cartItemsEntries.map(x=> 
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
						<img src={emptyCartButton} alt='empty-cart'/>
					</CartButton>
				</div>
			</FlexContainer>
		}
		</Fragment>
	)
}

export default Cart