import React from 'react';
import './Categories.css';
import prev from '../Icons/prev.svg'
import next from '../Icons/next.svg'
import {CATEGORIES} from '../Database'

let index = 0


class Categories extends React.Component{
	constructor(){
		super();
		this.state = CATEGORIES[index]
	}

	nextCategory=()=>{
		if(index===2) index=-1
		this.setState(CATEGORIES[index+1])
		index++
	}

	prevCategory=()=>{
		if(index===0) index=3
		this.setState(CATEGORIES[index-1])
		index--
	}

	render(){
		const {category, items}=this.state
		return(
			<div className='mv6'>
				<h1 className='tc'>{category}</h1>
				<div className='categories-container' >
					<img className='arrow prev' alt='prev' src={prev} onClick={()=>this.prevCategory()}/>
					{items.map(i=> <p className='square grow' key={i}> {i} </p>)}
					<img className='arrow next' alt='next' src={next} onClick={()=>this.nextCategory()}/>
				</div>	
			</div>
		)
	}
}

export default Categories;