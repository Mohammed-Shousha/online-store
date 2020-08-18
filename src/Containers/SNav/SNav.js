import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar'
import DropDown from '../../Components/DropDown'
import { CATEGORIES } from '../../Data/Database'


const SNav = () => (
	<Navbar small>
		{CATEGORIES.map(({ category, items }, i) => (
			<DropDown key={i}>
				<Link to={`/categories/${category.toLowerCase()}`}>
					<p> {category.toUpperCase()} </p>
				</Link>
				{items.length > 1 &&
					<div>
						{items.map(({name, img}) => (
							<Link to={`/categories/${category.toLowerCase()}-${name.toLowerCase()}`} key={name}>
								<img src={img} alt={img}/>
							</Link>
						))}
					</div>
				}
			</DropDown>
		))}
	</Navbar>
)

export default SNav