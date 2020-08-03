import React, {Fragment} from 'react'
import {CONTACT} from '../Database'


const Contact =() =>(
	<div className='bg-white'>
		<h2 className='mt4'>Contact Us</h2>
		{CONTACT.map(c =>(
			<a key={c.id} href={c.link} className='pa3'> 
				<img src={c.img} alt='contact' className='h3 w3 mh4 mb3 mt0'/>
			</a>
		))}
	</div>
)

export default Contact