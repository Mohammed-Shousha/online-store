import React from 'react'
import {Link} from 'react-router-dom'
import './SNav.css'
import {CATEGORIES} from '../Database'


const SNav =() =>(
	<nav className = 's-nav-bar bg-moon-gray'>
		{CATEGORIES.map(({category, items}, i) =>(
			<div className='dropdown' key={i}>
				<Link to={`/categories/${category}`}>
					<p className='s-nav mv1 mh3 pv1'> {category} </p>
				</Link>
				{items.length > 1 &&
					<div className='dropdown-content'>
					{items.map(item => (
						<Link to={`/categories/${category}-${item}`} key={item}> 
							<p >{item}</p>
						</Link>
					))}
				</div>}
			</div>
		))}
	</nav>
)

export default SNav