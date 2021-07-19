import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Square, Arrow, CategoriesContainer } from '../../Components/CategoriesComponents'
import FlexContainer from '../../Components/FlexContainer'
import { CATEGORIES as CAT } from '../../Data/Database'
import prev from '../../Data/Icons/prev.svg'
import next from '../../Data/Icons/next.svg'


const Categories = () => {
	
	const CATEGORIES = CAT.filter(c => c.items.length > 0)

	const [index, setIndex] = useState(0)
	const [state, setState] = useState(CATEGORIES[index])
	const { category, items } = state
	const len = CATEGORIES.length
	
	const nextCategory = () => {
		setIndex(index + 1)
		setState(CATEGORIES[(index + 1) % len])
	}

	const prevCategory = () => {
		setIndex(index + len - 1)
		setState(CATEGORIES[(index + len - 1) % len])
	}

	return (
		<CategoriesContainer>
			<Link to={`/categories/${category}`}>
				<h1>{category.toUpperCase()}</h1>
			</Link>
			<FlexContainer around>
				<Arrow alt='prev' src={prev} onClick={prevCategory} />
				<FlexContainer responsive>
					{items.map(({name, img})=>
						<Link to={`/categories/${category.toLowerCase()}-${name.toLowerCase()}`} key={name}>
							<Square data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='200'>
								<img src={img} alt={img}/>
							</Square>
						</Link>
					)}
				</FlexContainer>
				<Arrow alt='next' src={next} onClick={nextCategory} />
			</FlexContainer>
		</CategoriesContainer>
	)
}

export default Categories