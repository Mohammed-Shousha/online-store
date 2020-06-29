import React from 'react';
import './Nav.css'
import cart from '../../Icons/cart.png';
import store from '../../Icons/store.png';

const BigNav ='pa1 l-nav mv3 mh1 pointer grow center';


const Nav =() =>{
	return(
		<nav className ='fixed flex justify-end center bg-light-blue z-max'>
			<img alt='logo' src={store}  className='h2 w2 pa3 grow center pointer'/>
			<input type='searchBox' placeholder='Search' className='br4 bw0 pa1 center mv3 mh4 w-50 h-60' contenteditable='true'/> 
			<p className = {BigNav}> Resigter </p>
			<p className = {BigNav}>
				<img alt='cart' src={cart} className='pr1'/>
				 Cart
			</p>
		</nav>

	)
}

export default Nav