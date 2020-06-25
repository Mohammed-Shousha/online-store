import React from 'react';
import Dropdown from './Dropdown/Dropdown';


const SNav =() =>{
	return(
		<nav className = 'flex justify-between center h2-m bg-moon-gray mb2 mt5'>
			<Dropdown name='Covers' elements={['IPhone','Samsung','Sony']}/>
			<Dropdown name='Headphones' elements={['JBL','Beats']}/>
			<Dropdown name='Smart Watches' elements={['Mi']}/>
			<Dropdown name='Chargers'/>
		</nav>
	)
}
export default SNav