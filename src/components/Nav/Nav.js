import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Nav.css'
import cart from '../Icons/cart.png'
import store from '../Icons/store.png'
import user from '../Icons/user.png'
import list from '../Icons/list.png'
import signout from '../Icons/signout.png'


const Nav =({isSignedIn, onSignOut, name, cartItems}) =>{

	let history= useHistory()

	return(
		<nav className ='nav-bar'>
			<Link to='/'>
				<img alt='logo' src={store} 
				 className='logo grow'/>
			</Link>

			<input type='searchBox' placeholder='Search'
			 className='search center' contentEditable='true'/> 

			<div onClick={!isSignedIn? ()=> history.push('/signin') : null}
			className = {`l-nav grow pointer ${!isSignedIn? '' : 'tooltipNav'}`}>
				{isSignedIn? 'Hi '+ name: 'SignIn or SignUp'}
				{isSignedIn?
				<div className='tooltipTextNav'>
				<Link to='/orders'>
					<div>
					 	<img src={list} alt='list' className='h1 w1 pr2' />
					 	Orders 
					</div>
				</Link>
				<Link to='/profile'>
					<div>
						<img src={user} alt='user' className='h1 w1 pr2' />
						Profile
					</div>
				</Link>	
				<Link to='/' onClick={onSignOut}>
					<div id='signout'>
						<img src={signout} alt='signout' className='h1 w1 pr2'/>
						Sign Out
					</div> 
				</Link>	
				</div>
				: null}
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