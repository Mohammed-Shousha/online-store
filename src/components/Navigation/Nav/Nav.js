import React from 'react';
import cart from './cart.png';
import store from './store.png';

const BigNav ='pa1 l-nav mv3 mh1 pointer grow center';


const Nav =() =>{
	return(
		<nav className = 'flex justify-end center bg-light-blue'>
			<img alt='logo' src={store}  className='h2 w2 pa3 grow center pointer'/>
			<input type='searchBox' placeholder='Search' className='br4 bw0 pa1 center mv3 mh4 w-50 h-60'/> 
			<p className = {BigNav}> Resigter </p>
			<p className = {BigNav}>
				<img alt='cart' src={cart} style={{height:18, width:18}} className='pr1'/>
				 Cart
			</p>
		</nav>

	)
}

export default Nav