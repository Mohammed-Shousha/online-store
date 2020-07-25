import React, {Fragment} from 'react'
import {useParams} from 'react-router-dom'
import SNav from '../../components/SNav/SNav'
import Products from '../../components/Products/Products'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import {ProductsList} from '../../components/Database'


const StoreItems =({onAddingItem , isSignedIn})=>{
	let {id} = useParams()

	let type = id.split('-')[0].toLowerCase().replace(/\s/g, "-")

	let brand = ''
	if(id.split('-').length > 1){
		brand = id.split('-')[1].toLowerCase()
	}

	return(
		<Fragment>
		<SNav/>
		<Products
		 title={id}
		 brand={brand}
		 type={type}
		 products={ProductsList}
		 isSignedIn={isSignedIn}
		 onAddingItem={onAddingItem}
		/>
		<Contact/>
		<Footer/>
		</Fragment>
	)
}

export default StoreItems