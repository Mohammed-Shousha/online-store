import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Slideshow from './components/Slideshow/Slideshow';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';




class App extends React.Component {
	render(){
		return(
		    <div className="App">
		      	<Navigation/>
		      	<Slideshow/>
		      	<Products/>
		      	<Footer/>
		    </div>
		)
	}
} 

export default App;
