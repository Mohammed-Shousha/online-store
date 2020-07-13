import React, {useState} from 'react'
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import './App.css'
import Home from './containers/Home/Home'
import SignIn from './containers/SignIn/SignIn'
import Cart from './containers/Cart/Cart'
import Nav from './components/Nav/Nav'
import {Pro} from './components/Database'


const App =()=> {

	const nProducts = Pro.length
	const [name, setName] = useState('');
	const [isSignedIn, setIsSignedIn] = useState(false)
	const [cartItems, setCartItems] = useState(Array(nProducts).fill(0))

	const onSignIn =()=>{
		setIsSignedIn(true)
	}

	const onSignOut =()=>{
		setName('')
		setIsSignedIn(false)
		setCartItems(Array(nProducts).fill(0))
	}

	const onNameChange =(e)=>{
		setName(e.target.value)
	}

	const onAddingItem =(productId)=>{
		if(isSignedIn){
			let newCartItems=[...cartItems]
			newCartItems[productId]++
			setCartItems(newCartItems)
		}	
	}

	const onRemovingItem =(productId)=>{
		let newCartItems=[...cartItems]
		newCartItems[productId]--
		setCartItems(newCartItems)
	}


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

export default App