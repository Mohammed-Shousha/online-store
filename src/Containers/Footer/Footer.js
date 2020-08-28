import React from 'react'
import { FooterContainer, Contact } from '../../Components/FooterComponents'
import { CONTACT } from '../../Data/Database'


const Footer = () => (
	<>
		<Contact>
			<h2>Contact Us</h2>
			<div>
				{CONTACT.map(c => (
					<a key={c.id} href={c.link}>
						<img src={c.img} alt='contact' />
					</a>
				))}
			</div>
		</Contact>
		<FooterContainer>
			<h1> © 2020. All Rights Reserved</h1>
			<p>
				<span>About Us</span>
				&nbsp;|&nbsp;
				<span>Privacy Policy</span>
				&nbsp;|&nbsp;
				<span>Terms of Use</span>
			</p>
		</FooterContainer>
	</>
)

export default Footer