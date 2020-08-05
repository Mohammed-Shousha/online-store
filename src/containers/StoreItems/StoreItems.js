import React, {Fragment} from 'react'
import {useParams} from 'react-router-dom'
import Products from '../../components/Products/Products'
import {ProductsList} from '../../components/Database'


const StoreItems =()=>{
	let {id} = useParams()

	let type = id.split('-')[0].toLowerCase()
	
	let products = ProductsList.filter(product=> product.type === type)

	let brand = ''
	if(id.split('-').length > 1){
		brand = id.split('-')[1].toLowerCase()
		products = ProductsList.filter(product=> product.brand === brand)
	}

	return(
		<Fragment>
		<Products
		 title={id}
		 products={products}
		/>
		</Fragment>
	)
}

export default StoreItems