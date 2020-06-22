import React from 'react';
import './Navigation.css';
import XsNav from './XsNav/XsNav';
import Nav from './Nav/Nav';
import SNav from './SNav/SNav';


const Navigation = () =>{
	return(
		<div>
			<XsNav/>
			<Nav/>
			<SNav/>
		</div>
	)
}


export default Navigation;