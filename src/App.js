import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Slideshow from './components/Slideshow/Slideshow';
import Products from './components/Products/Products';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';




class App extends React.Component {
	render(){
		return(
		    <div className="App">
		      	<Navigation/>
		      	<Slideshow/>
		      	<Products title='Most Popular'/>
		      	<Features/>
		      	<Footer/>
		    </div>
		)
	}
} 

export default App;
