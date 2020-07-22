import React from 'react'
import './Circle.css'


const Circle = ({tag, img, color, description}) =>(
	<div className='circle' style={{background:color}}>
		<div className='pa1 tooltip'>
			<h3 className='tag'> {tag} 
			<p className='tooltiptext up' style={{color:color}}> {description} </p></h3>
			<img className='icons' src ={img} alt ='feature'/>
		</div>
	</div>
)

export default Circle