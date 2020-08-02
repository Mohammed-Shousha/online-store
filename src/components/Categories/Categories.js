import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Categories.css'
import prev from '../Icons/prev.svg'
import next from '../Icons/next.svg'
import {CATEGORIES as CAT} from '../Database'

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
		<div className='mv6'>
			<Link to={`/categories/${category}`}>
				<h1 className='tc'>{category}</h1>
			</Link>
			<div className='categories-container' >
				<img className='arrow prev' alt='prev' src={prev} onClick={prevCategory}/>
				{items.map(item=> 
					<Link to={`/categories/${category}-${item}`} key={item}> 
						<p className='square grow' key={item}> {item} </p>
					</Link>
				)}
				<img className='arrow next' alt='next' src={next} onClick={nextCategory}/>
			</div>	
		</div>
	)
}

export default Categories