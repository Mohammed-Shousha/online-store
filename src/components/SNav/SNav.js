import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../Database'
import { Navbar } from '../StyledComponents/Navbar'
import DropDown from '../StyledComponents/DropDown'


const SNav = () => (
	<Navbar small>
		{CATEGORIES.map(({ category, items }, i) => (
			<DropDown key={i}>
				<Link to={`/categories/${category.toLowerCase()}`}>
					<p> {category} </p>
				</Link>
				{items.length > 1 &&
					<div>
						{items.map(item => (
							<Link to={`/categories/${category.toLowerCase()}-${item.toLowerCase()}`} key={item}>
								<p> {item} </p>
							</Link>
						))}
					</div>
				}
			</DropDown>
		))}
	</Navbar>
)

export default SNav