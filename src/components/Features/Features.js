import React from 'react';
import './Features.css';
import Circle from './Circle/Circle';
import {FEATURES} from '../Database'


const Feature = ()=>{
	return(
		<div className='featurescontainer'>
			{FEATURES.map(feature =>{
				return(
					<Circle key={feature.tag} tag={feature.tag} img={feature.img}
					 color={feature.color} description={feature.description}/>
				)
			})}
		</div>
	)
}

export default Feature;