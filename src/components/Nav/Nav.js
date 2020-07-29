import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Nav.css'
import cart from '../Icons/cart.svg'
import store from '../Icons/store.svg'
import user from '../Icons/user.svg'
import list from '../Icons/list.svg'
import signout from '../Icons/signout.svg'


const Nav =({isSignedIn, onSignOut, name, cartItems}) =>{

	let history= useHistory()

	return(
		<nav className ='nav-bar'>
			<Link to='/'>
				<img alt='logo' src={store} 
				 className='logo grow'/>
			</Link>

			<input type='searchBox' placeholder='Search'
			 className='search'/> 

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