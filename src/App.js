import React from 'react';
import './App.css';
import Home from './containers/Home'
import SignIn from './containers/SignIn'


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
		const {onRouteChange, onSignOut, onAddingItems, onSignIn, onNameChange} = this

		return(
		    <div className="App">
		    	{route==='home'?
		    		<Home 
		    		 onRouteChange={onRouteChange}
		    		 onSignOut={onSignOut} 
			    	 onAddingItems={onAddingItems} 
			    	 isSignedIn={isSignedIn}
			    	 name={name}
			    	 cartItems={cartItems}/>
			    :route==='signIn'?
			    	<SignIn
			    	 onSignIn={onSignIn}
			    	 onNameChange={onNameChange}
			    	 name={name}/>
			    :<h1> Wrong Route </h1>}	
		    </div>
		)
	}
} 

export default App;