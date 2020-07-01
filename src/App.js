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
			    :
			      <SignIn onRouteChange={this.onRouteChange}/>}
		      	
		    </div>
		)
	}
} 

export default App;