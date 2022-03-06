import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Products from '../../Containers/Products/Products'
import Loading from '../../Components/Loading'
import { PRODUCTS_BY_TYPE, PRODUCTS_BY_BRAND } from '../../Data/Queries'


const StoreItems = () => {

   let { id } = useParams()

   const { t } = useTranslation()

   const [products, setProducts] = useState([])

   let type = id.split('-')[0].toLowerCase()

   let brand = ''
   if (id.split('-').length > 1) {
      brand = id.split('-')[1].toLowerCase()
   }

   const { loading } = useQuery(PRODUCTS_BY_TYPE, {
      variables: { type },
      onCompleted({ productsByType }) {
         setProducts(productsByType)
      }
   })

   useQuery(PRODUCTS_BY_BRAND, {
      variables: { type, brand },
      onCompleted(data) {
         if (brand) {
            setProducts(data.productsByBrand)
         }
      }
   })


   return (
      loading ?
         <Loading />
         :
         <Products
            title={t(id)}
            products={products}
         />
   )
}

export default StoreItems