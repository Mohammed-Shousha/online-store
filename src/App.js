import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Slideshow from './components/Slideshow/Slideshow';
import Products from './components/Products/Products';
import Features from './components/Features/Features';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';




class App extends React.Component {
	render(){
		return(
		    <div className="App">
		      	<Navigation/>
		      	<Slideshow/>
		      	<Products title='Most Popular'/>
		      	<Categories/>
		      	<Features/>
		      	<Contact/>
		      	<Footer/>
		    </div>
		)
	}
} 

export default App;