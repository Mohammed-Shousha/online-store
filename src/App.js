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
	route:'home',
	name:'',
	isSignedIn:false,
	cartItems:[],
}

class App extends React.Component {
	constructor(){
		super();
		this.state = initState
	}

	onRouteChange=(route)=>{
		this.setState({
			route:route
		})
	}

	onSignIn =()=>{
		this.setState({
			isSignedIn: true,
			route:'home'
		})
	}

	onSignOut =()=>{
		this.setState(initState)
	}

	onNameChange=(e)=>{
		this.setState({
			name:e.target.value
		})
	}

	onAddingItems=(product)=>{
		if(this.state.isSignedIn){
			this.setState({
				cartItems: this.state.cartItems.concat(product) //at the end
				// cartItems: [product, ...this.state.cartItems] //at the beginning
			})
			 
		}
		
	}

	render(){
		const {route, name, isSignedIn, cartItems} = this.state;
		return(
		    <div className="App">
		    	{(route==='home')?
		    		<div>
				    	<Nav onRouteChange={this.onRouteChange}
				    	 onSignOut={this.onSignOut} 
				    	 isSignedIn={isSignedIn} 
				    	 name={name}
				    	 cartItems={cartItems}/>
				    	<SNav/>
				      	<Slideshow/>
				      	<Products title='Most Popular' onAddingItems={this.onAddingItems}/>
				      	<Categories/>
				      	<Features/>
				      	<Contact/>
				      	<Footer/>
			      	</div>
			    : route==='signIn' 	
			    	? <div>
				      	<SignIn onSignIn={this.onSignIn} onNameChange={this.onNameChange} name={name}/>
			    		<Particles className='particles absolute top-0 left-0 w-100 h-100' params={particles} />
			      	</div>
			      	:<h1> Wrong Route </h1>
			   	}	
		    </div>
		)
	}
} 

export default App;