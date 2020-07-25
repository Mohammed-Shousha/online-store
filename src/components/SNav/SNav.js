import React from 'react'
import {Link} from 'react-router-dom'
import './SNav.css'
import {CATEGORIES} from '../Database'


const SNav =() =>(
	<nav className = 'flex justify-between center h2-m bg-moon-gray mb4 mt5'>
		{CATEGORIES.map(({category, items}, i) =>(
			<div className='dropdown' key={i}>
				<Link to={category}>
					<p className= 'pointer s-nav mv1 mh3 pv1'> {category} </p>
				</Link>
				{items.length?
					<div className='dropdown-content'>
					{items.map(x => (
						<Link to={`${category}-${x}`} key={x}> 
							<p >{x}</p>
						</Link>
					))}
					</div>
				:null}
			</div>
		))}
	</nav>
)

export default SNav