import React from 'react';
import './Products.css'
import {ProductCard} from 'react-ui-cards';
import p1 from '../Photos/6.jpg'
import p2 from '../Photos/3.jpg'
import p3 from '../Photos/7.jpg'
import p4 from '../Photos/2.jpg'

const P1 = [{
	id:1,
	photos : [p1, p2],
	price : '100 EGP',
	productName : 'Headset',
},
{
	id:2,
	photos:[p3, p4],
	price: '20000 EGP',
	productName: 'IPhone11'
}]

const P2 = [{
	id:3,
	photos : [p2, p1],
	price : '120 EGP',
	productName : 'Headset',
},
{
	id:4,
	photos:[p4, p3],
	price: '21000 EGP',
	productName: 'IPhone11'
}]

const PRODUCTS = [P1, P2]

const Products =({title='', onAddingItems})=>{
	return(
		<div>
			<h2 className={title.length ?'title': ''}>{title}</h2>
			<div className='row'>
				{PRODUCTS.map((P,i) =>{
					return(
						<div className='h-row' key={P[i].id}>
							{P.map(product =>{
								return(
									<div className='product-card' key={product.id}>
										<ProductCard
										photos = {product.photos}
										price = {product.price}
										productName = {product.productName}
										description='blah blah blah blah'/>
										<button className='add-to-cart'
										onClick={()=>onAddingItems(product.id)}>
										ADD TO CART
										</button>
									</div>
									
								)
							})}
						</div>
					)
				})}
			</div>	
		</div>

	);
}


export default Products;