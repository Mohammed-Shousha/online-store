import React from 'react';
import './App.css';
import Home from './containers/Home'
import Nav from './components/Nav/Nav'
import SignIn from './containers/SignIn'
import Cart from './containers/Cart'


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

	onRouteChange =(route)=>{
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

	onNameChange =(e)=>{
		this.setState({
			name:e.target.value
		})
	}

	onAddingItem =(product)=>{
		if(this.state.isSignedIn){
			this.setState({
				cartItems: this.state.cartItems.concat(product) //at the end
				// cartItems: [product, ...this.state.cartItems] //at the beginning
			})
			 
		}	
	}

	onRemovingItem =(id)=>{
		let arr = [...this.state.cartItems]
		let index = arr.indexOf(id)
		if (index !== -1) {
		    arr.splice(index, 1);
		    this.setState({cartItems: arr});
		}
	}

	render(){
		const {route, name, isSignedIn, cartItems} = this.state;
		const {onRouteChange, onSignOut, onAddingItem, onRemovingItem, onSignIn, onNameChange} = this

		return(
		    <div className="App">
		    	{route==='home'?
		    		<div>
			    		<Nav 
				    	 onRouteChange={onRouteChange}
			    		 onSignOut={onSignOut}  
				    	 isSignedIn={isSignedIn}
				    	 name={name}
				    	 cartItems={cartItems} />
			    		<Home 
			    		 onAddingItem={onAddingItem} />
		    		</div>

			    :route==='signIn'?
			    	<SignIn
			    	 onSignIn={onSignIn}
			    	 onNameChange={onNameChange}
			    	 name={name}/>

			    :route==='cart'?
			    	<div>
				    	<Nav 
				    	 onRouteChange={onRouteChange}
			    		 onSignOut={onSignOut}  
				    	 isSignedIn={isSignedIn}
				    	 name={name}
				    	 cartItems={cartItems}/>
				    	<Cart
				    	 cartItems={cartItems}
				    	 onRouteChange={onRouteChange}
				    	 onRemovingItem={onRemovingItem}/>
			    	</div>

			    :<h1> Wrong Route </h1>}	
		    </div>
		)
	}
} 

export default App;