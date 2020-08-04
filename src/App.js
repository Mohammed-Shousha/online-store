import React, {Fragment, lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch,  Route, Redirect} from 'react-router-dom'
import ContextProvider  from './context/ContextProvider'  
import Loading from './components/Loading/Loading'
const Home = lazy(()=> import('./containers/Home/Home')) 
const Cart = lazy(()=> import('./containers/Cart/Cart')) 
const SignIn = lazy(()=> import('./containers/SignIn/SignIn'))
const Checkout = lazy(()=> import('./containers/Checkout/Checkout'))  
const StoreItems = lazy(()=> import('./containers/StoreItems/StoreItems')) 
const SearchResults = lazy(()=> import('./containers/SearchResults/SearchResults')) 
const Orders= lazy(()=> import('./containers/Orders/Orders')) 
const Profile= lazy(()=> import('./containers/Profile/Profile')) 
const Nav = lazy(()=> import('./components/Nav/Nav')) 
const SNav = lazy(()=> import('./components/SNav/SNav')) 
const Footer = lazy(()=> import('./components/Footer/Footer')) 


const App =()=> {

	const NavRoutes =()=>(
    	<Fragment>
		<Nav/>
		<SNav/>
    	<Switch>
	    	<Route path='/' exact>
		    	<Home/>
	    	</Route>
		    <Route path='/cart'>
    			<Cart/>
	     	</Route>
	     	<Route path='/orders'>
	     		<Orders/>
	     	</Route>
	     	<Route path='/profile'>
	     		<Profile/>
	     	</Route>
  			<Route path="/categories/:id">
		    	<StoreItems/>
  			</Route>
  			<Route path="/search">
		    	<SearchResults/>
  			</Route>
  			<Route path='*'>
	 			<Redirect to='/notfound'/>
			</Route>
	    </Switch>
	    <Footer/>
	    </Fragment>
	)

	return(
		<ContextProvider>
			<Router>
				<Suspense fallback={<Loading/>}>
					<Switch>
			    		<Route path='/signin' exact>
			    			<SignIn/>
				     	</Route>
				     	<Route path='/checkout' exact>
				     	 	<Checkout/>
				     	</Route>
						<Route path='/notfound'>
				     	 	<h1> Not Found </h1>
				     	 	<Loading/>
				     	</Route>
						<NavRoutes/>
				    </Switch>
			    </Suspense>
		    </Router>
	    </ContextProvider>
	)
} 

export default App