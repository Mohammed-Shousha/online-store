import React, { Fragment } from 'react'
import { useLocation } from "react-router-dom"
import Products from '../../components/Products/Products'
import { ProductsList } from '../../components/Database'
import box from '../../components/Icons/box.svg'
import { LinkButton } from '../../components/StyledComponents/Buttons'
import Icon from '../../components/StyledComponents/Icon'


const SearchResults = () => {

	let query = new URLSearchParams(useLocation().search)
	let name = query.get('q')

	const products = ProductsList.filter(product => (
		product.name.toLowerCase().match(name.trim().toLowerCase())))

	return (
		<Fragment>
			{products.length ?
				<Fragment>
					<h1> Seatch Results for {name} </h1>
					<Products products={products} />
				</Fragment>
			:
				<Fragment>
					<Icon src={box} alt='box' />
					<h1> We Couldn’t Find What You Were Looking For </h1>
					<p> Keep calm and search again. We have SO many other products that you will like! </p>
					<LinkButton to='/'>
						Continue Shopping
					</LinkButton>
				</Fragment>
			}
		</Fragment>
	)
}

export default SearchResults