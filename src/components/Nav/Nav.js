import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import cart from '../Icons/cart.png'
import store from '../Icons/store.png'
import user from '../Icons/user.png'
import list from '../Icons/list.png'
import signout from '../Icons/signout.png'


const Nav =({isSignedIn, onSignOut, name, cartItems}) =>(
	<nav className ='fixed flex justify-around bg-light-blue z-max'>
		<Link to='/'>
			<img alt='logo' src={store} 
			 className='logo grow'/>
		</Link>

		<input type='searchBox' placeholder='Search'
		 className='search center' contentEditable='true'/> 

		<Link to={!isSignedIn? '/signin': location => location}>
			<div 
			className = {!isSignedIn? 'l-nav grow' : 'tooltipNav l-nav grow'}>
				{!isSignedIn? 'SignIn or SignUp':'Hi '+ name}
				{isSignedIn?
				<div className='tooltipTextNav'>
					 <div>
					 	<img src={list} alt='list' className='h1 w1 pr2' />
					 	Orders 
					 </div>
					 <div>
						<img src={user} alt='user' className='h1 w1 pr2' />
						Profile
					 </div>
					 <Link to='/' onClick={onSignOut}>
						 <div id='signout'  >
							<img src={signout} alt='signout' className='h1 w1 pr2'/>
							Sign Out
						  </div> 
					 </Link>
				</div>
				: ''}
			</div>
		</Link>

		<Link to={isSignedIn? 'cart' : '/'}>
			<div className ='l-nav grow'>
				 Cart
				<div className='flex'>
					<img alt='cart' src={cart} className='cart'/>
					<div className={cartItems.every(x => x===0) ? 's-circle hide': 's-circle'}>
						{cartItems.reduce((t,i) => t+i ,0)}
					</div>
				</div>
			</div>
		</Link>
	</nav>
)

export default Nav