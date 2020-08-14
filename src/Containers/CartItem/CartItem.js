import React, { useContext } from 'react'
import { CartItemsContainer, ProductDetails, ProductActions } from '../../Components/CartComponents'
import FlexContainer from '../../Components/FlexContainer'
import { DataContext } from '../../Data/DataContext'
import { editItem } from '../../Data/DataActions'
import { ProductsList } from '../../Data/Database'
import remove from '../../Data/Icons/delete.svg'

const CartItem = ({ productId, editable = true }) => {

	const { data, setData } = useContext(DataContext)
	const { cartItems } = data

	const onRemovingItem = (productId) => {
		setData(editItem(productId, false))
	}


	return (
		<CartItemsContainer>
			<div>
				<FlexContainer noAlign >
					<img src={ProductsList[productId].photos[0]} alt={ProductsList[productId].name} />
					<ProductDetails>
						<h2> {ProductsList[productId].name}</h2>
						<h3> {ProductsList[productId].price} EGP </h3>
						<p> {ProductsList[productId].description} </p>
					</ProductDetails>
				</FlexContainer>
				<ProductActions>
					<h3>x{cartItems[productId]}</h3>
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