import React from 'react'
import FlexContainer from '../../Components/FlexContainer'
import { Circle } from '../../Components/FeturesComponents'
import { Tooltip } from '../../Components/Tooltip'
import { FEATURES } from '../../Data/Database'


const Features = () => (
	<FlexContainer center responsive margin='0 auto 150px'>
		{FEATURES.map(feature => (
			<Circle key={feature.tag} color={feature.color}>
				<Tooltip>
					<h1> {feature.tag} </h1>
					<p> {feature.description} </p>
					<img src={feature.img} alt='feature' />
				</Tooltip>
			</Circle>
		))}
	</FlexContainer>
)

export default Features