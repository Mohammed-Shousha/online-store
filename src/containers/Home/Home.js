import React, {Fragment} from 'react'
import SNav from '../../components/SNav/SNav'
import Slideshow from '../../components/Slideshow/Slideshow'
import Products from '../../components/Products/Products'
import Categories from '../../components/Categories/Categories'
import Features from '../../components/Features/Features'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import {ProductsList} from '../../components/Database'


const Home = ({onAddingItem}) =>(
	<Fragment>
    	      <SNav/>
      	<Slideshow/>
      	<Products
      	 title='Most Popular'
      	 onAddingItem={onAddingItem}
      	 products={ProductsList} 
            />
      	<Products
      	 title='New Arrivals'
      	 onAddingItem={onAddingItem}
      	 products={ProductsList}
      	 brand={'apple'} 
            />
      	<Categories/>
      	<Features/>
      	<Contact/>
      	<Footer/>
	</Fragment>
)

export default Home