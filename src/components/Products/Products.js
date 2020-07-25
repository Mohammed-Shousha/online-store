import React, {Fragment} from 'react'
import './Products.css'
import {ProductCard} from 'react-ui-cards'


const Products =({title='', brand='', type='', num='' ,products, onAddingItem})=>{

	if(brand){
		products = products.filter(product=> product.brand === brand)
	}

	if(type){
		products = products.filter(product=> product.type === type)
	}

	let P = [...products]
	if(num){
		P= P.slice(0, num)
	}
	let PRO = []
	const PRODUCTS = []
	while(P.length){
		while(PRO.length<2){
			PRO.push(P.splice(0,2))
		}
		PRODUCTS.push(PRO)
		PRO=[]
	}

	return(
		<Fragment>
		<h2 className={title.length ?'title': ''}>{title}</h2>
		<div className='products-container'>
			{PRODUCTS.map((PRO,i)=>(
				<div className='row' key={i}>
					{PRO.map((P,i) =>(
						<div className='h-row' key={i}>
							{P.map(product =>(
								<div className='product-card' key={product.id}>
									<ProductCard
									 photos = {product.photos}
									 price = {`${product.price} EGP`}
									 productName = {product.productName}
									 description='blah blah blah blah'/>
									<button 
									 className='add-to-cart'
									 onClick={()=>onAddingItem(product.id)}>
									 ADD TO CART
									</button>
								</div>								
							))}
						</div>
					))}
				</div>
			))}
		</div>
		</Fragment>
	)
}

export default Products