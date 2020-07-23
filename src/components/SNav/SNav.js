import React from 'react'
import Dropdown from './Dropdown/Dropdown'
import {CATEGORIES} from '../Database'


const SNav =() =>(
	<nav className = 'flex justify-between center h2-m bg-moon-gray mb4 mt5'>
	{CATEGORIES.map((item, i) =>(
		<Dropdown 
		 key={i}
		 name={item.category} 
		 elements={item.items}
		/>
	))}
	</nav>
)

export default SNav