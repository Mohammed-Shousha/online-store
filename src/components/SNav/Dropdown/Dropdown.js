import React from 'react'
import './Dropdown.css'


const Dropdown=({name, elements=[]})=>(
	elements.length? 
	<div className='dropdown'>
		<p className= 'pointer s-nav mv1 mh3 pv1'> {name} </p>
		<div className='dropdown-content'>
		{elements.map(x => <p key={x}>{x}</p>)}
		</div>
	</div>
	:
	<div className='dropdown'>
		<p className='pointer s-nav mv1 mh3 pv1'> {name} </p>
	</div>
)

export default Dropdown