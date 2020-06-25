import React from 'react';
import './Products.css'
import {ProductCard} from 'react-ui-cards';

import p1 from '../Slideshow/6.jpg'
import p2 from '../Slideshow/3.jpg'
import p3 from '../Slideshow/7.jpg'
import p4 from '../Slideshow/2.jpg'

const P1 = [{
	photos : [p1, p2],
	price : '100 EGP',
	productName : 'Headset',
},
{
	photos:[p3, p4],
	price: '20000 EGP',
	productName: 'IPhone11'
}]

const P2 = [{
	photos : [p2, p1],
	price : '100 EGP',
	productName : 'Headset',
},
{
	photos:[p4, p3],
	price: '20000 EGP',
	productName: 'IPhone11'
}]

const PRO1 = [P1, P2] , PRO2 = [P2, P1]


const PRODUCTS = [PRO1, PRO2]


const Products =()=>{
	return(
		<div>
			{PRODUCTS.map(PRO=>{
				return(
					<div className='row'>
						{PRO.map(P =>{
							return(
								<div className='h-row'>
									{P.map(product =>{
										return(
											<ProductCard 
											photos = {product.photos}
											price = {product.price}
											productName = {product.productName}
											buttonText = 'Add to Cart'
											float={true}/>
										)
									})}
								</div>
							)
						})}
					</div>	
				)

			})}
		</div>

	);
}


export default Products;