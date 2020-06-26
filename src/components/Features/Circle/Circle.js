import React from 'react';
import './Circle.css'


const Circle = ({tag, img, color}) =>{
	return(
		<div className='circle grow' style={{background:color}}>
			<div className='pa1'>
				<h3 className='tag'> {tag} </h3>
				<img className='icons' src ={img} alt ='feature'/>
			</div>
		</div>
	)
}

export default Circle;