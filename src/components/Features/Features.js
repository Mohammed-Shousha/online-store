import React from 'react'
import './Features.css'
import Circle from './Circle/Circle'
import {FEATURES} from '../Database'


const Features = ()=>(
	<div className='features-container'>
		{FEATURES.map(feature =>(
			<Circle 
			 key={feature.tag}
			 tag={feature.tag} 
			 img={feature.img}
			 color={feature.color} 
			 description={feature.description}
			/>
		))}
	</div>
)

export default Features