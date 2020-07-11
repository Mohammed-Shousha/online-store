import React from 'react'
import './Products.css'
import {ProductCard} from 'react-ui-cards'
import {Pro} from '../Database'


const Products =({title='', onAddingItem})=>{

	let P = [...Pro]
	const PRODUCTS = []
	while(P.length) PRODUCTS.push(P.splice(0,2))

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
										<button 
										 className='add-to-cart'
										 onClick={()=>onAddingItem(product.id)}>
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
	)
}


export default Products