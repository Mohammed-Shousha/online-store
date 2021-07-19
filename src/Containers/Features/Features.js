import React from 'react'
import FlexContainer from '../../Components/FlexContainer'
import { Circle } from '../../Components/FeturesComponents'
import { FEATURES } from '../../Data/Database'


const Features = () => (
   <FlexContainer around responsive margin='5em auto'>
		{FEATURES.map(feature => (
         <Circle key={feature.tag} color={feature.color} data-aos='flip-up' data-aos-duration='1000' data-aos-delay='300'>
				<h1> {feature.tag} </h1>
				<p> {feature.description} </p>
				<img src={feature.img} alt='feature' />
			</Circle>
		))}
	</FlexContainer>
)

export default Features