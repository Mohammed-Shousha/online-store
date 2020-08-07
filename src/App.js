import React, {Fragment, lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch,  Route, Redirect} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Loading from './components/Loading/Loading'
const Home = lazy(()=> import('./containers/Home/Home')) 
const Cart = lazy(()=> import('./containers/Cart/Cart')) 
const Form = lazy(()=> import('./containers/Form/Form'))
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
		    <PrivateRoute path='/cart'>
				<Cart/>
	     	</PrivateRoute>
	     	<PrivateRoute path='/orders'>
	     		<Orders/>
	     	</PrivateRoute>
	     	<PrivateRoute path='/profile'>
	     		<Profile/>
	     	</PrivateRoute>
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
		<Router>
			<Suspense fallback={<Loading/>}>
				<Switch>
					<Route path={['/signin' , '/signup']}>
						<Form/>
					</Route>
					<PrivateRoute path='/checkout'>
						<Checkout/>
					</PrivateRoute>
					<Route path='/notfound'>
						<h1> 404 Not Found </h1>
					</Route>
					<NavRoutes/>
				</Switch>
			</Suspense>
		</Router>
	)
} 

export default App