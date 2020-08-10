import React, {useContext} from 'react'
import {ProductsList} from '../Database'
import {DataContext} from '../../context/DataContext'
import remove from '../Icons/delete.svg'
import { editItem } from '../../context/DataActions'
import {CartItemsContainer, ProductDetails, ProductActions} from '../StyledComponents/CartComponents'
import FlexContainer from '../StyledComponents/FlexContainer'

const CartItem = ({ productId, editable=true })=>{

	const {data, setData} = useContext(DataContext)
	const {cartItems} = data

	const onRemovingItem=(productId)=>{
		setData(editItem(productId, false))
	}


	return(
		<CartItemsContainer>
			<div>
				<FlexContainer>
					<img src={ProductsList[productId].photos[0]} alt={ProductsList[productId].name}/>
					<ProductDetails>
						<h2> {ProductsList[productId].name}</h2>
						<h3> {ProductsList[productId].price} EGP </h3>
						<p> {ProductsList[productId].description} </p>
					</ProductDetails>
				</FlexContainer>
				<ProductActions>
					<h3>x{cartItems[productId]}</h3>
					<br/>
					{editable&&
						<img 
						src={remove} alt='remove'
						onClick={()=> onRemovingItem(productId)}
						/>
					}
				</ProductActions>
			</div>
		</CartItemsContainer>
	)
}

export default CartItem