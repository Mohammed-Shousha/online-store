import React from 'react'
import './Footer.css'


const Footer =()=>{
	return(
		<footer className="bg-black flex justify-center h2 white ma0 ">
			<p className="ph4 mv2"><strong> © 2020 . All Rights Reserved</strong></p>
			<p className="ph1 mv2">
			 <span>About Us</span> | <span>Privacy Policy</span> | <span>Terms of Use</span> 
			</p>
		</footer>
	)
}

export default Footer