import React from 'react';
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home'
import Nav from './components/Nav/Nav'
import SignIn from './containers/SignIn'
import Cart from './containers/Cart'


const initState ={
	name:'',
	isSignedIn:false,
	cartItems:[],
}

class App extends React.Component {
	constructor(){
		super();
		this.state = initState
	}


	onSignIn =()=>{
		this.setState({
			isSignedIn: true,
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
		const {name, isSignedIn, cartItems} = this.state;
		const {onSignOut, onAddingItem, onRemovingItem, onSignIn, onNameChange} = this

		return(
			<Router>
			    <div className="App">
			    	<Switch>
				    	<Route path='/' exact>
				    		<div>
					    	 	<Nav 
					    		 onSignOut={onSignOut}  
						    	 isSignedIn={isSignedIn}
						    	 name={name}
						    	 cartItems={cartItems} />
					    	 	<Home onAddingItem={onAddingItem} />
				    	 	</div>
				    	</Route>
			    		 
			    		<Route path='/signin'>
			    			<SignIn
					    	  onSignIn={onSignIn}
					    	  onNameChange={onNameChange}
					    	  name={name}/>
					    </Route>

	 			    	<Route path='/cart'>
			    			<div>
				    			<Nav 
					    		 onSignOut={onSignOut}  
						    	 isSignedIn={isSignedIn}
						    	 name={name}
						    	 cartItems={cartItems} />
				    			<Cart
						     	 cartItems={cartItems}
						     	 onRemovingItem={onRemovingItem}/>
				     	 	</div>
				     	</Route>

				     	<Route>
				     	 	<h1> Under Construction </h1>
				     	</Route>
			     	</Switch>
			    </div>
		    </Router>
		)
	}
} 

export default App;