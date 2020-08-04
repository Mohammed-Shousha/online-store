import React, {Fragment} from 'react'
import {useLocation, Link} from "react-router-dom"
import Products from '../../components/Products/Products'
import {ProductsList} from '../../components/Database'
import './SearchResults.css'
import box from '../../components/Icons/box.svg'


const SearchResults =()=>{

	let query = new URLSearchParams(useLocation().search)
	let name = query.get('q')

	const products = ProductsList.filter(product =>(
		product.name.toLowerCase().match(name.trim().toLowerCase())))

	return(
		<Fragment>
		{products.length?
			<Fragment>
			<h1> Seatch Results for {name} </h1>
			<Products products={products}/>
			</Fragment>
		:
			<Fragment>
			<img src={box} alt='box' className='box-img'/>
			<h1> We couldn’t find what you were looking for </h1>
			<p> Keep calm and search again. We have SO many other products that you will like! </p>
			<Link to='/'>
				<h3 
				 className='pointer hover-black-60 mb5 mt2'>
				 Continue Shopping?
				</h3> 
			</Link>
			</Fragment>
		}
		</Fragment>
	)	
}

export default SearchResults