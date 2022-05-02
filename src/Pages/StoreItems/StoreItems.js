import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Products from '../../Containers/Products/Products'
import Loading from '../../Components/Loading'
import { PRODUCTS_BY_TYPE, PRODUCTS_BY_BRAND } from '../../Data/Queries'


const StoreItems = () => {

   let { id } = useParams()

   const [byBrandProducts, setByBrandProducts] = useState([])
   const [byTypeProducts, setByTypeProducts] = useState([])

   let type = id.split('-')[0].toLowerCase()

   let brand = ''
   if (id.split('-').length > 1) {
      brand = id.split('-')[1].toLowerCase()
   }

   const { loading } = useQuery(PRODUCTS_BY_TYPE, {
      variables: { type },
      onCompleted({ productsByType }) {
         setByTypeProducts(productsByType)
      }
   })

   const data = useQuery(PRODUCTS_BY_BRAND, {
      variables: { type, brand },
      onCompleted({ productsByBrand }) {
         if (brand) {
            setByBrandProducts(productsByBrand)
         }
      }
   })


   return (
      loading || data.loading ?
         <Loading />
         :
         <Products
            title={id}
            products={brand ? byBrandProducts : byTypeProducts}
         />
   )
}

export default StoreItems