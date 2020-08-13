import React, { useState, useContext, Fragment } from 'react'
import { ProductCard } from 'react-ui-cards'
import { ProductsContainer, ProductsTitle, AddToCart } from '../../Components/ProductsComponenets'
import Alert from '../../Components/Alert'
import { DataContext } from '../../Data/DataContext'
import { editItem } from '../../Data/DataActions'
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
			{alert && <Alert setAlert={setAlert} />}
		</Fragment>
	)
}

export default Products