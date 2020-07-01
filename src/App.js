import React from 'react';
import './App.css';
import Nav from './components/Navigation/Nav/Nav';
import SNav from './components/Navigation/SNav/SNav';
import Slideshow from './components/Slideshow/Slideshow';
import Products from './components/Products/Products';
import SignIn from './components/SignIn/SignIn';
import Features from './components/Features/Features';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';

const particles = {
  particles: {
    number:{
      value:300,
      density:{
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#003e45"
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#003e45",
      opacity: 0.4,
      width: 1
    },              
  }
}


const initState ={
	route:'home'
}

class App extends React.Component {
	constructor(){
		super();
		this.state =initState;
	}

	onRouteChange=(route)=>{
		this.setState({
			route:route
		})
	}

	render(){
		const {route} = this.state;
		return(
		    <div className="App">
		    	{route==='home'?
		    		<div>
				    	<Nav onRouteChange={this.onRouteChange}/>
				    	<SNav/>
				      	<Slideshow/>
				      	<Products title='Most Popular'/>
				      	<Categories/>
				      	<Features/>
				      	<Contact/>
				      	<Footer/>
			      	</div>
			    : 	<div>
				      	<SignIn onRouteChange={this.onRouteChange}/>
			    		<Particles className='particles absolute top-0 left-0 w-100 h-100' params={particles} />
			      	</div>}
		      	
		    </div>
		)
	}
} 

export default App;