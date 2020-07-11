import React from 'react';
import {CONTACT} from '../Database'


const Contact =() =>{
	return(
		<div>
			<h2>Contact Us</h2>
			{CONTACT.map(c =>{
				return(
					<a key={c.id} href={c.link} className='pa3'> 
						<img src={c.img} alt='contact' className='h3 w3 mh4 mv3'/>
					</a>
				)
			})}
		</div>
	)
}

export default Contact;