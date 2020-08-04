import React, {Fragment} from 'react'
import {CONTACT} from '../Database'
import './Footer.css'


const Footer =()=>(
	<Fragment>
	<div className='contact'>
		<h2>Contact Us</h2>
		{CONTACT.map(c =>(
			<a key={c.id} href={c.link} className='pa3'> 
				<img src={c.img} alt='contact' className='contact-img'/>
			</a>
		))}
	</div>
	<footer>
		<p className='all-rights-reserved'> © 2020 . All Rights Reserved</p>
		<p className="footer-links">
		 <span>About Us</span> | <span>Privacy Policy</span> | <span>Terms of Use</span> 
		</p>
	</footer>
	</Fragment>
)

export default Footer