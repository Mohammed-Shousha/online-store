import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './Containers/PrivateRoute/PrivateRoute'
import Loading from './Components/Loading'
const Home = lazy(() => import('./Pages/Home/Home'))
const Cart = lazy(() => import('./Pages/Cart/Cart'))
const Form = lazy(() => import('./Pages/Form/Form'))
const Checkout = lazy(() => import('./Pages/Checkout/Checkout'))
const StoreItems = lazy(() => import('./Pages/StoreItems/StoreItems'))
const SearchResults = lazy(() => import('./Pages/SearchResults/SearchResults'))
const Orders = lazy(() => import('./Pages/Orders/Orders'))
const Profile = lazy(() => import('./Pages/Profile/Profile'))
const Nav = lazy(() => import('./Containers/Nav/Nav'))
const SNav = lazy(() => import('./Containers/SNav/SNav'))
const Footer = lazy(() => import('./Containers/Footer/Footer'))


const App = () => {

	const NavRoutes = () => (
		<>
			<Nav />
			<SNav />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<PrivateRoute path='/cart'>
					<Cart />
				</PrivateRoute>
				<PrivateRoute path='/orders'>
					<Orders />
				</PrivateRoute>
				<PrivateRoute path='/profile'>
					<Profile />
				</PrivateRoute>
				<Route path="/categories/:id">
					<StoreItems />
				</Route>
				<Route path="/search">
					<SearchResults />
				</Route>
				<Route path='*'>
					<Redirect to='/notfound' />
				</Route>
			</Switch>
			<Footer />
		</>
	)

	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route path={['/signin', '/signup']}>
						<Form />
					</Route>
					<PrivateRoute path='/checkout'>
						<Checkout />
					</PrivateRoute>
					<Route path='/notfound'>
						<h1> 404 Not Found </h1>
					</Route>
					<NavRoutes />
				</Switch>
			</Suspense>
		</Router>
	)
}

export default App