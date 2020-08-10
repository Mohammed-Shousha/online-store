import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import prev from '../Icons/prev.svg'
import next from '../Icons/next.svg'
import {CATEGORIES as CAT} from '../Database'
import {Square, Arrow, CategoriesContainer} from '../StyledComponents/CategoriesComponents'
import FlexContainer from '../StyledComponents/FlexContainer'

const CATEGORIES = CAT.filter(c=> c.items.length>0)


const Categories =()=> {

	const [index, setIndex] = useState(0)
	const [state, setState] = useState(CATEGORIES[index]) 
	const {category, items} = state
	const len = CATEGORIES.length

	const nextCategory=()=>{
		setIndex(index+1)
		setState(CATEGORIES[(index+1)%len])
	}

	const prevCategory=()=>{
		setIndex(index+len-1)
		setState(CATEGORIES[(index+len-1)%len])
	}

	return(
		<CategoriesContainer>
			<Link to={`/categories/${category}`}>
				<h1>{category}</h1>
			</Link>
			<FlexContainer>
				<Arrow alt='prev' src={prev} onClick={prevCategory}/>
			<FlexContainer responsive>
				{items.map(item=> 
					<Link to={`/categories/${category}-${item}`} key={item}> 
						<Square key={item}> {item} </Square>
					</Link>
				)}
			</FlexContainer>
				<Arrow alt='next' src={next} onClick={nextCategory}/>
			</FlexContainer>
		</CategoriesContainer>
	)
}

export default Categories