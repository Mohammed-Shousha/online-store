import React , {useContext, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Autosuggest from 'react-autosuggest'
import {ProductsList} from '../Database'
import {DataContext} from '../../context/DataContext'
import {CartItemsContext} from '../../context/CartItemsContext'
import './Nav.css'
import cart from '../Icons/cart.svg'
import store from '../Icons/store.svg'
import user from '../Icons/user.svg'
import list from '../Icons/list.svg'
import signout from '../Icons/signout.svg'
import search from '../Icons/search.svg'


const Nav =() =>{

	const {isSignedIn, setIsSignedIn, signUpData, setSignUpData} = useContext(DataContext)
	const {cartItems, setCartItems, nProducts} = useContext(CartItemsContext)
	const {name} = signUpData

	const initSignUp = {
		name:'',
		email:'',
		password:'',
		phone:'',
		addresses:[{name:'', address:'', phone:''}]
	}

	const onSignOut =()=>{
		setIsSignedIn(false)
		setCartItems(Array(nProducts).fill(0))
		setSignUpData(initSignUp)
	}


	let history= useHistory()

	const getSuggestionValue = (suggestion) => suggestion.name

	const renderSuggestion = (suggestion) => (
	  <div> {suggestion.name} </div>
	)

	const [value, setValue] = useState('')
	const [suggestions, setSuggestions] =useState([]) 

	const onChange = (e, {newValue, method})=>{
		setValue(newValue)
	}

	const searchItem =(value)=>{
		history.push(`/search?q=${value}`)
		setValue('')
	}

	const onKeyUp =(e)=>{
		if(e.keyCode===13){
			searchItem(value)
		}
	}

	const onSuggestionsFetchRequested = ({ value }) => {
	    let inputValue = value.trim().toLowerCase()
		let inputLength = inputValue.length

		if(!inputLength){
		    setSuggestions([])
		}
		else{
			setSuggestions(
				ProductsList.filter(suggestion =>(
				suggestion.name.toLowerCase().match(inputValue)
			)))
		}
	}

	const onSuggestionsClearRequested =()=>{
		setSuggestions([])
	}

	const inputProps = {
		placeholder: 'Search',
      	value,
      	onChange,
      	onKeyUp,
	}

	return(
		<nav className ='nav-bar'>
			<Link to='/'>
				<img alt='logo' src={store} 
				 className='logo grow'/>
			</Link>

			<Autosuggest
	         suggestions={suggestions}
	         inputProps={inputProps}
	         onSuggestionsFetchRequested={onSuggestionsFetchRequested}
	         onSuggestionsClearRequested={onSuggestionsClearRequested}
	         getSuggestionValue={getSuggestionValue}
	         renderSuggestion={renderSuggestion}
		    />

		    <img 
		     src={search} alt='search' 
		     className='search'
		     onClick={()=>searchItem(value)}
		    />

			<div onClick={isSignedIn? null : ()=> history.push('/signin')}
			className = {`l-nav grow ${isSignedIn? 'tooltipNav' : ''}`}>
				{isSignedIn? 'Hi '+ (name? name : '') : 'SignIn or SignUp'}
				{isSignedIn &&
				<div className='tooltipTextNav'>
				<Link to='/orders'>
					<div className='user-action'>
					 	<img src={list} alt='list'/>
					 	<p>Orders </p>
					</div>
				</Link>
				<Link to='/profile'>
					<div className='user-action'>
						<img src={user} alt='user'/>
						<p>Profile</p>
					</div>
				</Link>	
				<Link to='/' onClick={onSignOut} >
					<div id='signout' className='user-action'>
						<img src={signout} alt='signout'/>
						<p>Sign Out</p>
					</div> 
				</Link>	
				</div>}
			</div>

			<Link to={isSignedIn? 'cart' : '/'}>
				<div className ='l-nav grow'>
					Cart
					<div className='flex'>
						<img alt='cart' src={cart} className='cart'/>
						<div className={`s-circle ${cartItems.every(x => x===0) ? 'hide': ''}`}>
							{cartItems.reduce((t,i) => t+i ,0)}
						</div>
					</div>
				</div>
			</Link>
		</nav>
	)
}

export default Nav