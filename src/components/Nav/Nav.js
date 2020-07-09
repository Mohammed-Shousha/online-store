import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'
import cart from '../Icons/cart.png';
import store from '../Icons/store.png';
import user from '../Icons/user.png';
import list from '../Icons/list.png';
import signout from '../Icons/signout.png';


const BigNav ='flex pa1 l-nav mv3 mh1 pointer grow center';


const Nav =({isSignedIn, onSignOut, name, cartItems}) =>{
	return(
		<nav className ='fixed flex justify-end center bg-light-blue z-max'>

			<Link to='' className='pa2 pl5 pt3'>
			<img alt='logo' src={store} 
			className='h2 w2 grow center pointer' />
			</Link>

			<input type='searchBox' placeholder='Search' className='br4 bw0 pa1 center mv3 mh4 w-50 h-60' contentEditable='true'/> 

			<Link to={!isSignedIn? '/signin': ''}>
				<div 
				className = {!isSignedIn? BigNav : 'tooltipNav pa1 l-nav mv3 mh1 pointer grow center'}>
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

			<Link to={isSignedIn? 'cart' : ''} className='mh5'>
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