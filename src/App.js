import React, {useState} from 'react'
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import './App.css'
import Home from './containers/Home'
import Nav from './components/Nav/Nav'
import SignIn from './containers/SignIn'
import Cart from './containers/Cart'


const App =()=> {

	const [name, setName] = useState('');
	const [isSignedIn, setIsSignedIn] = useState(false)
	const [cartItems, setCartItems] = useState([])

	const onSignIn =()=>{
		setIsSignedIn(true)
	}

	const onSignOut =()=>{
		setName('')
		setIsSignedIn(false)
		setCartItems([])
	}

	const onNameChange =(e)=>{
		setName(e.target.value)
	}

	const onAddingItem =(product)=>{
		if(isSignedIn){
			setCartItems(cartItems.concat(product)) //at the end
			//[product, ...cartItems] at the beginning
		}	
	}

	const onRemovingItem =(id)=>{
		let arr = [...cartItems]
		let index = arr.indexOf(id)
		if (index !== -1) {
		    arr.splice(index, 1)
		    setCartItems(arr)
		}
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