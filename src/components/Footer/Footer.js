import React, {Fragment} from 'react'
import {CONTACT} from '../Database'
import {FooterContainer, Contact} from '../StyledComponents/FooterComponents' 


const Footer =()=>(
	<Fragment>
	<Contact>
		<h2>Contact Us</h2>
		{CONTACT.map(c =>(
			<a key={c.id} href={c.link}> 
				<img src={c.img} alt='contact'/>
			</a>
		))}
	</Contact>
	<FooterContainer>
		<h1> © 2020 . All Rights Reserved</h1>
		<p>
		 	<span>About Us</span> | 
			<span>Privacy Policy</span> | 
			<span>Terms of Use</span> 
		</p>
	</FooterContainer>
	</Fragment>
)

export default Footer