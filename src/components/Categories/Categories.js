import React, {useState} from 'react'
import './Categories.css'
import prev from '../Icons/prev.svg'
import next from '../Icons/next.svg'
import {CATEGORIES} from '../Database'


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
			<h1 className='tc'>{category}</h1>
			<div className='categories-container' >
				<img className='arrow prev' alt='prev' src={prev} onClick={prevCategory}/>
				{items.map(i=> <p className='square grow' key={i}> {i} </p>)}
				<img className='arrow next' alt='next' src={next} onClick={nextCategory}/>
			</div>	
		</div>
	)
}

export default Categories