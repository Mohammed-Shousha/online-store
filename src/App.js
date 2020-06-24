import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Slideshow from './components/Slideshow/Slideshow';



class App extends React.Component {
	render(){
		return(
		    <div className="App">
		      	<Navigation/>
		      	<Slideshow/>
		      	<Footer/>
		    </div>
		)
	}
} 

export default App;
