import React from 'react';
import './Slideshow.css';
import {Slide} from 'react-slideshow-image';
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './6.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'


const properties = {
  duration: 3500,
  transitionDuration: 550,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
}

const img = [img1, img2, img3, img4, img5, img6, img7]

const Slideshow =() =>{
	return(
		<div className="slide-container">
	        <Slide {...properties}>
	          	{img.map(i =>{ 
	          		return(
		          		<div className="each-slide" key={i}>
		          			<img src= {i} alt='img'/>
		          		</div>
	          		);
	          	})}
	        </Slide>
      	</div>
	);
}
export default Slideshow;