import React from 'react';
import SNav from '../components/SNav/SNav';
import Slideshow from '../components/Slideshow/Slideshow';
import Products from '../components/Products/Products';
import Categories from '../components/Categories/Categories';
import Features from '../components/Features/Features';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = ({onAddingItem}) =>{
	return(
		<div>
	    	<SNav/>
	      	<Slideshow/>
	      	<Products
	      	 title='Most Popular'
	      	 onAddingItem={onAddingItem} />
	      	<Categories/>
	      	<Features/>
	      	<Contact/>
	      	<Footer/>
		</div>
	)
}

export default Home;