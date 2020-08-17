import React, { useContext } from 'react'
import { CartItemsContainer, ProductDetails, ProductActions } from '../../Components/CartComponents'
import FlexContainer from '../../Components/FlexContainer'
import { DataContext } from '../../Data/DataContext'
import { editItem } from '../../Data/DataActions'
import { ProductsList } from '../../Data/Database'
import remove from '../../Data/Icons/delete.svg'


const CartItem = ({ productId, editable = true, order }) => {

	const { data, setData } = useContext(DataContext)
	const { cartItems } = data

	const onRemovingItem = (productId) => {
		setData(editItem(productId, false))
	}

	let qty = 0 
	if(order){
		qty = order.find(item => item[0] === productId)[1]
	}else{
		qty = cartItems.find(item=> item[0] === productId)[1]
	}

	let product = ProductsList.find(product => product.id === productId)


	return (
		<CartItemsContainer>
			<div>
				<FlexContainer noAlign >
					<img src={product.photos[0]} alt={product.name} />
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
							src={remove} alt='remove'
							onClick={() => onRemovingItem(productId)}
						/>
					}
				</ProductActions>
			</div>
		</CartItemsContainer>
	)
}

export default CartItem