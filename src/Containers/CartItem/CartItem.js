import React, { useContext } from 'react'
import { CartItemsContainer, ProductDetails, ProductActions } from '../../Components/CartComponents'
import FlexContainer from '../../Components/FlexContainer'
import { DataContext } from '../../Data/DataContext'
import { editCartItems } from '../../Data/DataActions'
import { ProductsList } from '../../Data/Database'
import bin from '../../Data/Icons/bin.svg'


const CartItem = ({ productId, editable = true, order, checkout = false }) => {

	const { data, setData } = useContext(DataContext)
	const { email, cartItems } = data

	const onRemovingItem = async (productId) => {
		const response = await fetch('http://localhost:8888/removeitem', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email,
				productId
			})
		})
		const { result, user } = await response.json()
		if (result.nModified) {
			setData(editCartItems(user.cartItems))
		}
	}

	let qty = 0
	if (order) {
		qty = order.find(item => item.productId === productId).qty
	} else {
		qty = cartItems.find(item => item.productId === productId).qty
	}

	let product = ProductsList.find(product => product.id === productId)


	return (
		<CartItemsContainer checkout={checkout}>
			<div>
				<FlexContainer noAlign >
					<img src={product.photo} alt={product.name} />
					<ProductDetails>
						<h2> {product.name}</h2>
						<h3> {product.price} EGP </h3>
						<p> {product.description} </p>
					</ProductDetails>
				</FlexContainer>
				<ProductActions>
					<h3>x{qty}</h3>
					<br />
					{editable &&
						<img
							src={bin} alt='bin'
							onClick={() => onRemovingItem(productId)}
						/>
					}
				</ProductActions>
			</div>
		</CartItemsContainer>
	)
}

export default CartItem