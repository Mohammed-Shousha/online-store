import React from 'react';
import './XsNav.css';
import shipping from './shipping.png';
import money from './money.png';
import refund from './refund.png';


const XsNav =() =>{
	return(
		<nav className=" xs-nav flex justify-between h1-m">
			<div className='tl inline-flex left'>
	            <img alt='shipping' src={shipping} style={{height:18, width:18}} className='pa0 ml3'/>
                <p>Free Shipping</p>
                <img alt='refund' src={refund} style={{height:18, width:18}} className='pa0 ml3'/>
                <p>Free Returns</p>
                <img alt='money' src={money} style={{height:18, width:18}} className='pa0 ml3'/>
                <p>Cash on Delivery</p>
            </div>
            <div className='tr inline-flex right'>
                <p>Daily Deals</p>
                <p>Customer Service</p>
            </div>
        </nav>
    );
}

export default XsNav;