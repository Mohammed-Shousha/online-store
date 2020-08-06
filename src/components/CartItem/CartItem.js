import React, {useContext} from 'react'
import {ProductsList} from '../Database'
import {DataContext} from '../../context/DataContext'
import './CartItem.css'
import remove from '../Icons/delete.svg'
import { editItem } from '../../context/DataActions'


const CartItem = ({ productId, editable=true })=>{

	const {data, setData} = useContext(DataContext)
	const {cartItems} = data

	const onRemovingItem=(productId)=>{
		setData(editItem(productId, false))
	}


	return(
		<div className='cart-items-container'>
			<div className='item-container'>
				<div className='flex'>
					<img src={ProductsList[productId].photos[0]} alt='product' className='product-img'/>
					<div className='product-details'>
						<h2 > {ProductsList[productId].name}</h2>
						<h3> {ProductsList[productId].price} EGP </h3>
						<p> {ProductsList[productId].description} </p>
					</div>
				</div>
				<div className='product-action'>
					<h3 className='qty'>x{cartItems[productId]}</h3>
					<br/>
					{editable&&
						<img 
						src={remove} alt='remove'
						className='bin-img ' 
						onClick={()=> onRemovingItem(productId)}
						/>
					}
				</div>
			</div>
		</div>
	)
}

export default CartItem