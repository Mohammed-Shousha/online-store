import React, { useContext, useState, useRef, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Autosuggest from 'react-autosuggest'
import Logo from '../../Components/Logo'
import { MainNav } from '../../Components/Navbar'
import FlexContainer from '../../Components/FlexContainer'
import { NavText, UserAction, CartCircle, UserActionsContainer } from '../../Components/NavComponents'
import { DataContext } from '../../Data/DataContext'
import { signOut } from '../../Data/DataActions'
import { ProductsList } from '../../Data/Database'
import cart from '../../Data/Icons/cart.svg'
import user from '../../Data/Icons/user.svg'
import list from '../../Data/Icons/list.svg'
import signout from '../../Data/Icons/signout.svg'
import search from '../../Data/Icons/search.svg'
import './Nav.css'


const Nav = () => {

	const { isSignedIn, setIsSignedIn, data, setData } = useContext(DataContext)
	const { name, cartItems } = data
	const newName = name.split(' ')[0]

	const onSignOut = () => {
		setIsSignedIn(false)
		setData(signOut())
	}

	let history = useHistory()

	const getSuggestionValue = (suggestion) => suggestion.name

	const renderSuggestion = (suggestion) => (
		<div> {suggestion.name} </div>
	)

	const [value, setValue] = useState('')
	const [suggestions, setSuggestions] = useState([])

	const onChange = (e, { newValue }) => {
		setValue(newValue)
	}

	const searchItem = (value) => {
		if (value) {
			history.push(`/search?q=${value}`)
		}
	}

	const onKeyUp = (e) => {
		if (e.keyCode === 13) {
			searchItem(value)
		}
	}

	const onSuggestionsFetchRequested = ({ value }) => {
		let inputValue = value.trim().toLowerCase()
		let inputLength = inputValue.length

		if (!inputLength) {
			setSuggestions([])
		}
		else {
			setSuggestions(
				ProductsList.filter(suggestion => (
					suggestion.name.toLowerCase().match(inputValue)
				)))
		}
	}

	const onSuggestionsClearRequested = () => {
		setSuggestions([])
	}

	const inputProps = {
		placeholder: 'Search',
		value,
		onChange,
		onKeyUp,
	}

	const [show, setShow] = useState(false)

	const toggleShow = () => {
		setShow(!show)
	}

	const userActions = useRef(null)

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (userActions.current && !userActions.current.contains(e.target)) {
				setShow(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [show])

	return (
		<MainNav>
			<Logo />

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
				onClick={() => searchItem(value)}
			/>

			<NavText
				relative
				ref={userActions}
				onClick={isSignedIn ? toggleShow : () => history.push('/signin')}
			>
				{isSignedIn ? `Hi ${newName}` : 'SignIn or SignUp'}
				{isSignedIn && show &&
					<UserActionsContainer>
						<Link to='/orders'>
							<UserAction>
								<img src={list} alt='list' />
								<p> Orders </p>
							</UserAction>
						</Link>
						<Link to='/profile'>
							<UserAction>
								<img src={user} alt='user' />
								<p> Profile </p>
							</UserAction>
						</Link>
						<Link to='/' onClick={onSignOut} >
							<UserAction signOut>
								<img src={signout} alt='signout' />
								<p> Sign Out </p>
							</UserAction>
						</Link>
					</UserActionsContainer>}
			</NavText>

			<Link to={isSignedIn ? '/cart' : '/'}>
				<NavText>
					Cart
					<FlexContainer>
						<img alt='cart' src={cart} />
						<CartCircle hide={cartItems.every(x => x[1] === 0)}>
							{cartItems.reduce((t, item) => t + item[1], 0)}
						</CartCircle>
					</FlexContainer>
				</NavText>
			</Link>
		</MainNav>
	)
}

export default Nav