import React, { lazy, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AOS from "aos"
import "aos/dist/aos.css"
import PrivateRoute from './Containers/PrivateRoute/PrivateRoute'
AOS.init()

const Home = lazy(() => import('./Pages/Home/Home'))
const Cart = lazy(() => import('./Pages/Cart/Cart'))
const Form = lazy(() => import('./Pages/Form/Form'))
const Confirm = lazy(() => import('./Pages/Confirm/Confirm'))
const Checkout = lazy(() => import('./Pages/Checkout/Checkout'))
const StoreItems = lazy(() => import('./Pages/StoreItems/StoreItems'))
const SearchResults = lazy(() => import('./Pages/SearchResults/SearchResults'))
const Orders = lazy(() => import('./Pages/Orders/Orders'))
const Profile = lazy(() => import('./Pages/Profile/Profile'))
const ProductPage = lazy(() => import('./Pages/ProductPage/ProductPage'))
const Nav = lazy(() => import('./Containers/Nav/Nav'))
const SNav = lazy(() => import('./Containers/SNav/SNav'))
const Footer = lazy(() => import('./Containers/Footer/Footer'))


const App = () => {

	const NavRoutes = () => (
		<>
         <Nav data-aos="fade-up" />
         <SNav data-aos="fade-up" />
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
				<Route path="/product/:id">
					<ProductPage />
				</Route>
				<Route path='*'>
					<Redirect to='/notfound' />
				</Route>
			</Switch>
			<Footer />
		</>
	)

	const { i18n } = useTranslation()
	
	useEffect(() => {
		if (i18n.language === 'ar') {
			document.getElementsByTagName('html')[0].setAttribute("dir", "rtl")
		}
	}, [i18n.language])

	return (
		<Router>
			<Switch>
				<Route path={['/signin', '/signup']}>
					<Form />
				</Route>
				<PrivateRoute path='/checkout'>
					<Checkout />
					<Footer />
				</PrivateRoute>
				<Route path="/confirm/:id">
					<Confirm />
					<Footer bottom={true}/>
				</Route>
				<Route path='/notfound'>
					<h1> 404 Not Found </h1>
				</Route>
				<NavRoutes />
			</Switch>
		</Router>
	)
}

export default App