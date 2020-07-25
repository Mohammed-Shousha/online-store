import React from 'react'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown'
import {CATEGORIES} from '../Database'


const SNav =() =>(
	<nav className = 'flex justify-between center h2-m bg-moon-gray mb4 mt5'>
	{CATEGORIES.map((item, i) =>(
		<Link to={item.category} key={i}>
			<Dropdown 
			 name={item.category} 
			 elements={item.items}
			/>
		</Link>
	))}
	</nav>
)

export default SNav