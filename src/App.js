import React, {useState, lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import './App.css'
import {Pro} from './components/Database'
import Loading from './components/Loading/Loading' 
const Home = lazy(()=> import('./containers/Home/Home')) 
const Cart = lazy(()=> import('./containers/Cart/Cart')) 
const SignIn = lazy(()=> import('./containers/SignIn/SignIn'))
const Checkout = lazy(()=> import('./containers/Checkout/Checkout')) 
const Nav = lazy(()=> import('./components/Nav/Nav')) 



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
			<Suspense fallback={<Loading/>}>
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

				     	<Route path='/checkout'>
				     	 	<Checkout/>
				     	</Route>

				     	<Route path='*'>
				     	 	<Loading/>
				     	</Route>
			     	</Switch>
			    </div>
		    </Suspense>
	    </Router>
	)
} 

export default App