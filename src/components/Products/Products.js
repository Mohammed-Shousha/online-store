import React, {useState, useContext, Fragment} from 'react'
import {DataContext} from '../../context/DataContext'
import {ProductCard} from 'react-ui-cards'
import SignInFirst from '../SignInFirst/SignInFirst'
import './Products.css'
import { editItem } from '../../context/DataActions'


const Products =({title='', num='', products})=>{

	const{isSignedIn, setData} = useContext(DataContext)

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

	const [alert, setAlert] = useState(false)

	const onAddingItems =(productId)=>{
		setData(editItem(productId, true))
	}

	return(
		<Fragment>
		<h2 className={title.length ?'title': ''}>{title.toUpperCase()}</h2>
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
									 productName = {product.name}
									 description='blah blah blah blah'/>
									<button 
									 className='add-to-cart'
									 onClick={isSignedIn?()=>onAddingItems(product.id) : ()=> setAlert(true)}>
									 ADD TO CART
									</button>
								</div>								
							))}
						</div>
					))}
				</div>
			))}
		</div>
		{alert && <SignInFirst setAlert={setAlert} />}
		</Fragment>
	)
}

export default Products