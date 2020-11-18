import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ProductsContainer, ProductsTitle, AddToCart, Product } from '../../Components/ProductsComponenets'
import ProductCard from '../../Components/ProductCard'
import Alert from '../../Components/Alert'
import { DataContext } from '../../Data/DataContext'
import { editCartItems } from '../../Data/DataActions'


const Products = ({ title = '', num = '', products }) => {

	const { isSignedIn, setData, data } = useContext(DataContext)
	const { email } = data
	const [ isSubmitting, setIsSumbitting] = useState(null)
	
	const { i18n } = useTranslation()

	let P = [...products]

	if (num) {
		P = P.slice(0, num)
	}

	let PRO = []
	const PRODUCTS = []
	while (P.length) {
		while (PRO.length < 2) {
			PRO.push(P.splice(0, 2))
		}
		PRODUCTS.push(PRO)
		PRO = []
	}

	const [alert, setAlert] = useState(false)

	const onAddingItems = async(productId) => {
		if(isSignedIn){
			setIsSumbitting(productId)
			const response = await fetch('http://localhost:8888/additem', {
				method: 'put',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					productId
				})
			})
			const { result, cartItems } = await response.json()
			if (result.nModified) {
				setData(editCartItems(cartItems))
				setIsSumbitting(null)
			}
		} else{
			setAlert(true)
		}
	}

	return (
		<>
			<ProductsTitle align= {i18n.language === 'ar'? 'right': 'left'}>{title.toUpperCase()}</ProductsTitle>
				{PRODUCTS.map((PRO, i) => (
					<ProductsContainer key={i}>
						{PRO.map((P, i) => (
							<div key={i}>
								{P.map(product => (
									<Product key={product.id}>
										<ProductCard
											name={product.name}
											price={`${product.price} EGP`}
											photo={product.photo}
											details='blah blah blah blah'
										/>
										<AddToCart 
											onClick={() => onAddingItems(product.id)}
											disabled = {isSubmitting === product.id}
										>
											ADD TO CART
										</AddToCart>
									</Product>
								))}
							</div>
						))}
					</ProductsContainer>
				))}
			{alert && <Alert setAlert={setAlert} />}
		</>
	)
}

export default Products