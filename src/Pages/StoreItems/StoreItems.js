import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Products from '../../Containers/Products/Products'
import { ProductsList } from '../../Data/Database'


const StoreItems = () => {
	let { id } = useParams()

   const { t } = useTranslation()

	let type = id.split('-')[0].toLowerCase()

	let filteredProducts = ProductsList.filter(product => product.type === type)

	let brand = ''
	if (id.split('-').length > 1) {
		brand = id.split('-')[1].toLowerCase()
		filteredProducts = filteredProducts.filter(product => product.brand === brand)
	}

	return (
		<Products
			title={t(id)}
			products={filteredProducts}
		/>
	)
}

export default StoreItems