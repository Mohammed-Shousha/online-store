import React from 'react';
import Item from './Item/Item';


const SNav =() =>{
	return(
		<nav className = 'flex justify-between center h2-m bg-moon-gray mb2 mt5'>
			<Item name='Covers' elements={['IPhone','Samsung','Sony']}/>
			<Item name='Headphones' elements={['JBL','Beats']}/>
			<Item name='Smart Watches' elements={['Mi']}/>
			<Item name='Chargers'/>
		</nav>
	)
}
export default SNav