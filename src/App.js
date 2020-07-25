import React, {useState, lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import {ProductsList} from './components/Database'
import Loading from './components/Loading/Loading' 
const Home = lazy(()=> import('./containers/Home/Home')) 
const Cart = lazy(()=> import('./containers/Cart/Cart')) 
const SignIn = lazy(()=> import('./containers/SignIn/SignIn'))
const Checkout = lazy(()=> import('./containers/Checkout/Checkout'))  
const StoreItems = lazy(()=> import('./containers/StoreItems/StoreItems'))  
const Nav = lazy(()=> import('./components/Nav/Nav')) 
const Orders= lazy(()=> import('./components/Orders/Orders')) 


const App =()=> {

	const initSignUp = {
		name:'',
		email:'',
		password:'',
		phone:'',
		addresses:[]
	}

	const nProducts = ProductsList.length
	const [isSignedIn, setIsSignedIn] = useState(false)
	const [cartItems, setCartItems] = useState(Array(nProducts).fill(0))
	const [orders , setOrders] = useState([])

	const [signUpData, setSignUpData] = useState({
		name:'',
		email:'',
		password:'',
		phone:'',
		addresses:[]
	})
	const {name} = signUpData

	const [marker, setMarker] = useState({lat:null, lng:null})

	const onSignIn =()=>{
		setIsSignedIn(true)
	}

	const onSignOut =()=>{
		setSignUpData(initSignUp)
		setIsSignedIn(false)
		setCartItems(Array(nProducts).fill(0))
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
				    	  signUpData={signUpData}
				    	  setSignUpData={setSignUpData}
				    	  marker={marker}
				    	  setMarker={setMarker}/>
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
			     	 	<Checkout
			     	 	 signUpData={signUpData}
			     	 	 setSignUpData={setSignUpData}
			     	 	 marker={marker}
				    	 setMarker={setMarker}
				    	 orders={orders}
				    	 setOrders={setOrders}
				    	 cartItems={cartItems}/>
			     	</Route>

			     	<Route path='/orders'>
			     		<Nav 
			    		 onSignOut={onSignOut}  
				    	 isSignedIn={isSignedIn}
				    	 name={name}
				    	 cartItems={cartItems} />
			     		<Orders
			     		 orders={orders}
			     		 cartItems={cartItems}
			     		 />
			     	</Route>


          			<Route path="/:id">
          				<Nav 
			    		 onSignOut={onSignOut}  
				    	 isSignedIn={isSignedIn}
				    	 name={name}
				    	 cartItems={cartItems} />
				    	<StoreItems
				    	 onAddingItem={onAddingItem}
				    	/>
          			</Route>

			     	<Route path='*'>
			     	 	<Loading/>
			     	</Route>
		     	</Switch>
		    </Suspense>
	    </Router>
	)
} 

export default App