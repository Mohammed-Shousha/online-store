import React from 'react'
import { useLocation } from "react-router-dom"
import Products from '../../Containers/Products/Products'
import { LinkButton } from '../../Components/Buttons'
import Icon from '../../Components/Icon'
import { ProductsList } from '../../Data/Database'
import box from '../../Data/Icons/box.svg'


const SearchResults = () => {

	let query = new URLSearchParams(useLocation().search)
	let name = query.get('q')

	const products = ProductsList.filter(product => (
		product.name.toLowerCase().match(name.trim().toLowerCase())))

	return (
		<>
			{products.length ?
				<>
					<Products
						title={`Search Results for ${name}`}
						products={products} />
				</>
			:
				<>
					<Icon src={box} alt='box' />
					<h1> We Couldn’t Find What You Were Looking For </h1>
					<p> Keep calm and search again. We have SO many other products that you will like! </p>
					<LinkButton to='/'>
						Continue Shopping
					</LinkButton>
				</>
			}
		</>
	)
}

export default SearchResults