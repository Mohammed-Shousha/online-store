import React from 'react'
import { Slide } from 'react-slideshow-image'
import { SlideContainer, SlidePhoto } from '../../Components/SlideshowComponents'
import { slideShowImages, properties } from '../../Data/Database'


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