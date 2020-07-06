import React from 'react';
import Nav from '../components/Nav/Nav';
import SNav from '../components/SNav/SNav';
import Slideshow from '../components/Slideshow/Slideshow';
import Products from '../components/Products/Products';
import Categories from '../components/Categories/Categories';
import Features from '../components/Features/Features';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = ({onRouteChange, onSignOut, isSignedIn, name, cartItems, onAddingItems}) =>{
	return(
		<div>
	    	<Nav
	    	 onRouteChange={onRouteChange}
	    	 onSignOut={onSignOut} 
	    	 isSignedIn={isSignedIn} 
	    	 name={name}
	    	 cartItems={cartItems} />
	    	<SNav/>
	      	<Slideshow/>
	      	<Products
	      	 title='Most Popular'
	      	 onAddingItems={onAddingItems} />
	      	<Categories/>
	      	<Features/>
	      	<Contact/>
	      	<Footer/>
		</div>
	)
}

export default Home;