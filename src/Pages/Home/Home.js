import React from 'react'
import Slideshow from '../../Containers/Slideshow/Slideshow'
import Products from '../../Containers/Products/Products'
import Categories from '../../Containers/Categories/Categories'
import Features from '../../Containers/Features/Features'
import { ProductsList } from '../../Data/Database'


const Home = () => (
	<>
		<Slideshow />
		<Products
			title='Most Popular'
			num={4}
			products={ProductsList}
		/>
		<Categories />
		<Features />
	</>
)

export default Home