import React, {Fragment} from 'react'
import {CONTACT} from '../Database'


const Contact =() =>(
	<Fragment>
		<h2>Contact Us</h2>
		{CONTACT.map(c =>(
			<a key={c.id} href={c.link} className='pa3'> 
				<img src={c.img} alt='contact' className='h3 w3 mh4 mv3'/>
			</a>
		))}
	</Fragment>
)

export default Contact