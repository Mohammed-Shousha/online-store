import React from 'react'
import './Slideshow.css'
import {Slide} from 'react-slideshow-image'
import {slideShowImages} from '../Database'

const properties = {
  duration: 3500,
  transitionDuration: 550,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
}


const Slideshow =() =>{
	return(
		<div className="slide-container">
	        <Slide {...properties}>
	          	{slideShowImages.map(i =>{ 
	          		return(
		          		<div className="each-slide" key={i}>
		          			<img src= {i} alt='img'/>
		          		</div>
	          		)
	          	})}
	        </Slide>
      	</div>
	)
}
export default Slideshow