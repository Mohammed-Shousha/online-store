import React from 'react'
import './Dropdown.css'

const SmallNav ='pointer s-nav mv1 mh3 pv1'

const Dropdown=({name,elements=[]})=>{
	let len = elements.length

	return len? 
		<div className='dropdown'>
			<p className= {SmallNav}> {name} </p>
			<div className='dropdown-content'>
			{elements.map(x => <p key={x}>{x}</p>)}
			</div>
		</div>

		:<div className='dropdown'>
			<p className= {SmallNav}> {name} </p>
		</div>
}

export default Dropdown