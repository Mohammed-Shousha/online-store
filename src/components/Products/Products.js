import React from 'react';
import {ProductCard} from 'react-ui-cards';

import p1 from '../Slideshow/6.jpg'
import p2 from '../Slideshow/3.jpg'
import p3 from '../Slideshow/7.jpg'
import p4 from '../Slideshow/2.jpg'

const photos1 = [p1, p2]
const photos2 = [p3, p4]


const Products =()=>{
	return(
		<div className='flex'>
			<ProductCard
			 float={true} 
			 photos={photos1}
			 price='100$'
			 productName='Beats Headset'
			 description='Beats Studio3 Wireless (Over-Ear, Black matte)'
			 url='cart'
			 buttonText='Add to Cart'/>
			 <ProductCard 
			 float={true}
			 photos={photos2}
			 price='1000$'
			 productName='IPhone11'
			 url='cart'
			 buttonText='Add to Cart'/>
		</div>


	);
}


export default Products;