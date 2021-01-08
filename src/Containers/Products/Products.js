import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ProductsContainer, ProductsTitle, AddToCart, Product } from '../../Components/ProductsComponenets'
import ProductCard from '../../Components/ProductCard'
import Alert from '../../Components/Alert'


const Products = ({ title = '', num = '', products }) => {
	
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

	return (
		<>
			<ProductsTitle align= {i18n.language === 'ar'? 'right': 'left'}>{title.toUpperCase()}</ProductsTitle>
				{PRODUCTS.map((PRO, i) => (
					<ProductsContainer key={i}>
						{PRO.map((P, i) => (
							<div key={i}>
								{P.map(product => (
									<Product key={product.id}>
										<Link to={`/product/${product.id}`}>
										<ProductCard
											name={product.name}
											price={`${product.price} EGP`}
											photo={product.photo}
											details='blah blah blah blah'
										/>
										</Link>
										<AddToCart 
											productId={product.id}
											setAlert={setAlert}
										/>
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