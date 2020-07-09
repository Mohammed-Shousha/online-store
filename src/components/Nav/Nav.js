import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'
import cart from '../Icons/cart.png';
import store from '../Icons/store.png';
import user from '../Icons/user.png';
import list from '../Icons/list.png';
import signout from '../Icons/signout.png';


const BigNav ='flex l-nav pa1 ph4 grow center';


const Nav =({isSignedIn, onSignOut, name, cartItems}) =>{
	return(
		<nav className ='fixed flex justify-end  bg-light-blue z-max'>

			<Link to=''>
				<img alt='logo' src={store} 
				 className='logo grow'/>
			</Link>

			<input type='searchBox' placeholder='Search'
			 className='search center' contentEditable='true'/> 

			<Link to={!isSignedIn? '/signin': ''}>
				<div 
				className = {!isSignedIn? BigNav : 'tooltipNav l-nav ph5 pa1 pointer center'}>
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
						 <div id='signout' onClick={()=>onSignOut()} >
							<img src={signout} alt='signout' className='h1 w1 pr2'/>
							Sign Out
						  </div> 
					</div>
					: ''}
				</div>
			</Link>

			<Link to={isSignedIn? 'cart' : ''}>
				<div className = {BigNav}>
					 Cart
					<div className='flex'>
						<img alt='cart' src={cart} className='cart'/>
						<div className={cartItems.length ? 's-circle': 's-circle hide'} >{cartItems.length}</div>
					</div>
				</div>
			</Link>

		</nav>

	)
}

export default Nav