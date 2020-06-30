import React from 'react';
import './Categories.css';
import prev from '../Icons/prev.svg'
import next from '../Icons/next.svg'

const States = [{
	category:'HEADPHONES',
	items:['Jbl', 'Sony', 'Mi']
},
{
	category:'COVERS',
	items:['IPhone', 'Sony', 'Samsung']	
},
{
	category:'SMART WATCHES',
	items:['Jbl', 'Mi']
}]

let index = 0

class Categories extends React.Component{
	constructor(){
		super();
		this.state = States[index]
	}

	nextCategory=()=>{
		if(index===2) index=-1
		this.setState(States[index+1])
		index++
	}

	prevCategory=()=>{
		if(index===0) index=3
		this.setState(States[index-1])
		index--
	}

	render(){
		const {category, items}=this.state
		return(
			<div className='mv6'>
				<h1 className='tc'>{category}</h1>
				<div className='all' >
					<img className='button prev' alt='prev' src={prev} onClick={()=>this.prevCategory()}/>
					{items.map(i=> <p className='square grow' key={i}> {i} </p>)}
					<img className='button next' alt='next' src={next} onClick={()=>this.nextCategory()}/>
				</div>	
			</div>
		)
	}
}

export default Categories;