import React, { useState, useContext, Fragment } from 'react'
import { DataContext } from '../../context/DataContext'
import { ProductCard } from 'react-ui-cards'
import SignInFirst from '../SignInFirst/SignInFirst'
import { editItem } from '../../context/DataActions'
import { ProductsContainer, ProductsTitle, AddToCart } from '../StyledComponents/ProductsComponenets'
import './Products.css'


const Products = ({ title = '', num = '', products }) => {

	const { isSignedIn, setData } = useContext(DataContext)

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

	const onAddingItems = (productId) => {
		setData(editItem(productId, true))
	}

	return (
		<Fragment>
			<ProductsTitle title={title.length}>{title.toUpperCase()}</ProductsTitle>
			<ProductsContainer>
				{PRODUCTS.map((PRO, i) => (
					<div key={i}>
						{PRO.map((P, i) => (
							<div key={i}>
								{P.map(product => (
									<div key={product.id}>
										<ProductCard
											photos={product.photos}
											price={`${product.price} EGP`}
											productName={product.name}
											description='blah blah blah blah'
										/>
										<AddToCart 
											onClick={isSignedIn ? () => onAddingItems(product.id) 
											: () => setAlert(true)}
										>
											ADD TO CART
										</AddToCart>
									</div>
								))}
							</div>
						))}
					</div>
				))}
			</ProductsContainer>
			{alert && <SignInFirst setAlert={setAlert} />}
		</Fragment>
	)
}

export default Products