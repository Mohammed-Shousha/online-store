import React, {Fragment, useState, lazy, Suspense} from 'react'
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
const Profile= lazy(()=> import('./components/Profile/Profile')) 


const App =()=> {

	const initSignUp = {
		name:'',
		email:'',
		password:'',
		phone:'',
		addresses:[{name:'', address:'', phone:''}]
	}

	const nProducts = ProductsList.length
	const [isSignedIn, setIsSignedIn] = useState(true)
	const [cartItems, setCartItems] = useState([1,1,0,1,0,0,0])
	const [orders , setOrders] = useState([])

	const [signUpData, setSignUpData] = useState({
		name:'',
		email:'',
		password:'',
		phone:'',
		addresses:[{name:'', address:'', phone:''}]
	})
	const {name} = signUpData

	const [signInData, setSignInData ] = useState({
		signInEmail:'',
		signInPassword:''
	})

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

	const NavRoutes =()=>(
    	<Fragment>
		<Nav 
		 onSignOut={onSignOut}  
    	 isSignedIn={isSignedIn}
    	 name={name}
    	 cartItems={cartItems} 
    	/>
    	<Switch>
	    	<Route path='/' exact>
		    	<Home 
		    	 onAddingItem={onAddingItem}
		    	 isSignedIn={isSignedIn}
		    	/>
	    	</Route>
		    <Route path='/cart'>
    			<Cart
		     	 cartItems={cartItems}
		     	 onRemovingItem={onRemovingItem}
		     	/>
	     	</Route>
	     	<Route path='/orders'>
	     		<Orders
	     		 orders={orders}
	     		 cartItems={cartItems}
	     		/>
	     	</Route>
	     	<Route path='/profile'>
	     		<Profile
	     		 signUpData={signUpData}
	     		 setSignUpData={setSignUpData}
	     		 signInData={signInData}
	     		 setSignInData={setSignInData}
	     		/>
	     	</Route>
  			<Route path="/:id">
		    	<StoreItems
		    	 onAddingItem={onAddingItem}
			     isSignedIn={isSignedIn}
		    	/>
  			</Route>
	     	<Route path='*'>
	     	 	<Loading/>
	     	</Route>
	    </Switch>
	    </Fragment>
	)


	return(
		<Router>
			<Suspense fallback={<Loading/>}>
				<Switch>
		    		<Route path='/signin' exact>
		    			<SignIn
				    	 onSignIn={onSignIn}
				    	 signUpData={signUpData}
				    	 setSignUpData={setSignUpData}
				    	 marker={marker}
				    	 setMarker={setMarker}
				    	 setSignInData={setSignInData}
				    	/>
			     	</Route>
			     	<Route path='/checkout' exact>
			     	 	<Checkout
			     	 	 signUpData={signUpData}
			     	 	 setSignUpData={setSignUpData}
			     	 	 marker={marker}
				    	 setMarker={setMarker}
				    	 orders={orders}
				    	 setOrders={setOrders}
				    	 cartItems={cartItems}
				    	/>
			     	</Route>
					<NavRoutes/>
			    </Switch>
		    </Suspense>
	    </Router>
	)
} 

export default App