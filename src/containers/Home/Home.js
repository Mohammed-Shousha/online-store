import React, { Fragment } from 'react'
import Slideshow from '../../components/Slideshow/Slideshow'
import Products from '../../components/Products/Products'
import Categories from '../../components/Categories/Categories'
import Features from '../../components/Features/Features'
import { ProductsList } from '../../components/Database'


const Home = () => (
	<Fragment>
		<Slideshow />
		<Products
			title='Most Popular'
			num={4}
			products={ProductsList}
		/>
		<Categories />
		<Features />
	</Fragment>
)

export default Home