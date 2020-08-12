import React from 'react'
import { Slide } from 'react-slideshow-image'
import { slideShowImages, properties } from '../Database'
import { SlideContainer, SlidePhoto } from '../StyledComponents/SlideshowComponents'


const Slideshow = () => (
	<SlideContainer>
		<Slide {...properties}>
			{slideShowImages.map(img => (
				<SlidePhoto key={img} src={img} alt='img' />
			))}
		</Slide>
	</SlideContainer>
)

export default Slideshow