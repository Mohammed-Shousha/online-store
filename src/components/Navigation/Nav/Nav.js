import React from 'react';
import './Nav.css'
import cart from '../../Icons/cart.png';
import store from '../../Icons/store.png';
import user from '../../Icons/user.png';
import list from '../../Icons/list.png';
import signout from '../../Icons/signout.png';

const BigNav ='pa1 l-nav mv3 mh1 pointer grow center';


const Nav =({onRouteChange, name, isSignedIn}) =>{
	return(
		<nav className ='fixed flex justify-end center bg-light-blue z-max'>

			<img alt='logo' src={store} 
			className='h2 w2 pa3 grow center pointer'
			onClick={!isSignedIn? ()=>{onRouteChange('start')} : ()=>{onRouteChange('home')}} />

			<input type='searchBox' placeholder='Search' className='br4 bw0 pa1 center mv3 mh4 w-50 h-60' contentEditable='true'/> 

			<div 
			className = {!isSignedIn? BigNav : 'tooltipNav pa1 l-nav mv3 mh1 pointer grow center'}
			onClick={!isSignedIn ? ()=>onRouteChange('signIn') : ()=>{}}>
			{!isSignedIn? 'Sign In or Sign Up':'Hi '+ name}
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
				 <div id='signout' onClick={()=>onRouteChange('start')} >
					<img src={signout} alt='signout' className='h1 w1 pr2'/>
					Sign Out
				  </div> 
			</div>
			: ''}
			</div>

			<div className = {BigNav}>
				<img alt='cart' src={cart} className='w1 h1 pr2'/>
				 Cart
			</div>

		</nav>

	)
}

export default Nav