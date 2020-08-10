import React from 'react'
import {FEATURES} from '../Database'
import FlexContainer from '../StyledComponents/FlexContainer'
import { Circle } from '../StyledComponents/FeturesComponents'
import {Tooltip} from '../StyledComponents/Tooltip'


const Features = () =>(
	<FlexContainer center responsive margin='0 auto 150px'>
		{FEATURES.map(feature =>(
			<Circle key={feature.tag} color={feature.color}>
				<Tooltip>
					<h1> {feature.tag} </h1>
					<p> {feature.description} </p>
					<img src ={feature.img} alt ='feature'/>
				</Tooltip>
			</Circle>
		))}
	</FlexContainer>
)

export default Features