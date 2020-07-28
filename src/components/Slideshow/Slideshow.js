import React from 'react'
import './Slideshow.css'
import {Slide} from 'react-slideshow-image'
import {slideShowImages, properties} from '../Database'


const Slideshow =() =>(
	<div className="slide-container">
        <Slide {...properties}>
          	{slideShowImages.map(img =>(
          		<div className="each-slide" key={img}>
          			<img src= {img} alt='img'/>
          		</div>
          	))}
        </Slide>
  	</div>
)

export default Slideshow