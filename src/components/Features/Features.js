import React from 'react'
import './Features.css'
import {FEATURES} from '../Database'


const Features = ()=>(
	<div className='features-container'>
		{FEATURES.map(feature =>(
			<div className='circle' key={feature.tag} style={{background:feature.color}}>
				<div className='pa1 tooltip'>
					<h3 className='tag'> {feature.tag} </h3>
					<p className='tooltiptext up' style={{color:feature.color}}> {feature.description} </p>
					<img className='icons' src ={feature.img} alt ='feature'/>
				</div>
			</div>
		))}
	</div>
)

export default Features